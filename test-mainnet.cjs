const { ethers } = require('ethers');

async function testMainnet() {
  console.log('=== TESTING MAINNET CONNECTION ===\n');
  
  console.log('1. Testing Ethereum Mainnet via getblock.io...');
  try {
    const provider = new ethers.JsonRpcProvider('https://go.getblock.us/81990708e37a492c89af1f1b7a82cb9a');
    const block = await provider.getBlockNumber();
    console.log('   ✅ Connected to Ethereum Mainnet');
    console.log('   ✅ Latest block:', block);
  } catch (e) {
    console.log('   ❌ Failed:', e.message);
  }
  
  console.log('\n2. SAFETY REMINDER:');
  console.log('   - This is REAL Ethereum Mainnet');
  console.log('   - Do NOT send real transactions');
  console.log('   - Use for viewing balances only');
  console.log('   - Never expose real private keys');
}

testMainnet();
