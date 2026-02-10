// mock-crypto.js - Mock for browser crypto libraries
export const publicKeyCreate = (privateKey) => {
  // Return a mock public key (65 bytes for uncompressed)
  return new Uint8Array(65).fill(1);
};

export const privateKeyVerify = (privateKey) => {
  return privateKey && privateKey.length === 32;
};

export const ecdsaSign = (message, privateKey) => {
  return {
    signature: new Uint8Array(64).fill(0),
    recid: 0
  };
};

export const ecdsaVerify = (signature, message, publicKey) => {
  return true;
};

export const privateKeyTweakAdd = (privateKey, tweak) => {
  return new Uint8Array(32).fill(0);
};

// Default export for tiny-secp256k1 style
export default {
  publicKeyCreate,
  privateKeyVerify,
  ecdsaSign,
  ecdsaVerify,
  privateKeyTweakAdd
};
