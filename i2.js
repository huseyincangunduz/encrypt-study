const crypto = require("crypto");

function encrypt(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

function decrypt(encrypted, key) {
  const iv = Buffer.from(encrypted.iv, "hex");
  const encryptedText = Buffer.from(encrypted.encryptedData, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const key = crypto.randomBytes(32); // 256-bit key
const text = "Hello, World!";
const encrypted = encrypt(text, key);
const decrypted = decrypt(encrypted, key);
console.log("Original:", text);
console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
