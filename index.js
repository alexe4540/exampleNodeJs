const fs = require(`fs`);

let readedFile = fs.readFileSync(`text.txt`, `utf-8`);

console.log(readedFile)

fs.writeFileSync(`text1.txt`, `Hello, World! from file 2`);

readedFile = fs.readFileSync(`text1.txt`, `utf-8`);

console.log(readedFile)