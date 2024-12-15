const fs = require('fs');
const chalk = require('chalk')


const color = chalk.hex('#30a70d') 
console.log(color('I am Toms favorite color!'))



// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const user = JSON.parse(dataJSON);

// user.name = 'Kevin'
// user.age = 20

// const userJSON = JSON.stringify(user)
// fs.writeFileSync('1-json.json', userJSON)