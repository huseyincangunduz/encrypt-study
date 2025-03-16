const ChildProccess = require("child_process");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "Hüseyin1234++";
console.info("Parola şifreleme");
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Hash değerini veritabanına kaydet
  console.info("Hash", hash);
  bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    // Doğrulama sonucunu kontrol et
    console.info("Parolalar uyuşuyor mu?", result);
  });
});
