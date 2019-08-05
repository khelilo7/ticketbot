var Tesseract = require("tesseract.js");
var filename = "imgs/ticket1.png";

Tesseract.recognize(filename)
  .catch(err => console.error(err))
  .then(function(result) {
    var text = result.text.split("\n");
    var price = text[2]
      .replace(/\s/g, "")
      .substr(1)
      .slice(0, -3);
    price = parseFloat(price);
    var dep = text[3].split(" ")[0];
    console.log("Price is ", price, "€");
    console.log("Departement is", dep);
    process.exit(0);
  });
// to add progress you need to add this
// .progress(function(p) {
//     console.log("progress", p);
// })
