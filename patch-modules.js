// patch-modules.js
const fs = require("fs")
const path = require("path")

console.log("Patching modules to fix Vercel build...")

// Find all files with the problematic pattern
const searchDir = path.join(__dirname, "node_modules")
const problematicFiles = []

function walkDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  for (const file of files) {
    const fullPath = path.join(dir, file.name)
    if (file.isDirectory() && !file.name.includes("node_modules")) {
      walkDir(fullPath)
    } else if (file.isFile() && (file.name.endsWith(".js") || file.name.endsWith(".jsx") || file.name.endsWith(".ts"))) {
      try {
        const content = fs.readFileSync(fullPath, "utf8")
        if (content.includes('./{}/')) {
          console.log(`Found ./{}/ in: ${fullPath}`)
          problematicFiles.push(fullPath)
        }
      } catch (err) {
        // Ignore
      }
    }
  }
}

try {
  walkDir(searchDir)
  console.log(`Found ${problematicFiles.length} files with ./{}/ pattern`)
  
  if (problematicFiles.length > 0) {
    // Just rename the first one to see
    console.log("First problematic file:", problematicFiles[0])
  }
} catch (err) {
  console.log("Error walking directory:", err.message)
}

// Specifically fix bip174
const bip174Path = path.join(__dirname, "node_modules", "bip174", "src", "lib", "converter", "index.js")
if (fs.existsSync(bip174Path)) {
  console.log("Attempting to fix bip174...")
  try {
    let content = fs.readFileSync(bip174Path, "utf8")
    // Add .js extension to all relative requires
    content = content.replace(/require\('\.\/([^'()]+)'\)/g, (match, p1) => {
      if (!p1.includes(".js") && !p1.includes(".json") && p1 !== "..") {
        return `require('./${p1}.js')`
      }
      return match
    })
    fs.writeFileSync(bip174Path, content)
    console.log("✓ Patched bip174 require statements")
  } catch (err) {
    console.log("Could not patch bip174:", err.message)
  }
}
