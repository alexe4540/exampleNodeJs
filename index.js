const fs = require('fs');
const myReadShort = fs.createReadStream(__dirname + '/article.txt');
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function (chunk) {
    console.log(`New data write: \n\n`);
    myWriteShort.write(chunk);
})