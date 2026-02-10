// mock-tiny-secp256k1.js
export default {
  // Mock implementation
  publicKeyCreate: () => new Uint8Array(33),
  privateKeyVerify: () => true,
  ecdsaSign: () => ({ signature: new Uint8Array(64), recid: 0 }),
  ecdsaVerify: () => true
}
