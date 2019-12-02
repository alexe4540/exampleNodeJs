const fs = require(`fs`);

fs.readFile(`text.txt`, `utf-8`, (err, data) => {
    console.log(data);
});

fs.writeFile(`text1.txt`, `From file 2`, (err, data) => {});

console.log(`Сработало до чтения/записис файла`)

