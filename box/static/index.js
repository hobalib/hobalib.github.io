const fs = require("fs");
const path = require("path")

const files = fs.readdirSync(path.resolve('./src/static/weather_icons'));

files.forEach(element => {
    const file = fs.readFileSync(path.resolve(`./src/static/weather_icons/${element}`));
    // console.log(file.toString());
    let dStr = file.toString();
    let rdst = dStr.replace('<svg xmlns="http://www.w3.org/2000/svg"', '<svg xmlns="http://www.w3.org/2000/svg" style="color: #ffffff"');
    fs.writeFileSync(path.resolve(`./src/static/weather_icons/${element}`), rdst);
    console.log(`/src/static/weather_icons/${element}   写入完成`)
});
console.log(files);