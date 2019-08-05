const fs = require("fs");
const okrabyte = require("okrabyte");
(async () => {
  async function words() {
    const files = await new Promise((resolve, reject) => {
      fs.readdir("imgs/", (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
    const mapped = await Promise.all(
      files.map(file => {
        return new Promise((resolve, reject) => {
          okrabyte.decodeBuffer(
            fs.readFileSync("imgs/" + file),
            (err, data) => {
              if (err) {
                return reject(err);
              } else {
                resolve(data);
              }
            }
          );
        });
      })
    );
    return mapped;
  }
  const testing = await words();
  console.log(testing);
})();
