// debug-build.js
const { execSync } = require("child_process");
const fs = require("fs");

console.log("=== DEBUG BUILD ===");

try {
  // Try to run vite build and see the actual error
  console.log("Running: npx vite build");
  const result = execSync("npx vite build 2>&1", { 
    encoding: "utf8",
    shell: true,
    stdio: "pipe"
  });
  
  console.log("=== VITE OUTPUT ===");
  console.log(result);
  console.log("=== END OUTPUT ===");
  
} catch (error) {
  console.log("=== BUILD FAILED ===");
  console.log("Error message:", error.message);
  console.log("Error stderr:", error.stderr?.toString() || "none");
  console.log("Error stdout:", error.stdout?.toString() || "none");
  
  // Check specific files
  console.log("\n=== CHECKING FILES ===");
  
  // Check if wallet.js exists
  if (fs.existsSync("src/services/wallet.js")) {
    console.log("wallet.js exists, checking content...");
    const content = fs.readFileSync("src/services/wallet.js", "utf8");
    const lines = content.split("\n").slice(0, 10);
    console.log("First 10 lines:", lines.join("\n"));
  }
}
