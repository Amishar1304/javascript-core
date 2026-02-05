const name ="kiwi"
const repoCount = 50

console.log(name + "=" + repoCount );


const gameName = new String('kiwi')

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newName = new String("kiwi");
console.log(newName);

console.log(newName[0]);
console.log(newName.__proto__);

console.log(newName.length); //4
console.log(newName.toUpperCase);
console.log(newName.charAt(2)); //w
console.log(newName.indexOf(4)); //-1

const newString = newName.substring(0, 3)
console.log(newString); //kiw

const anotherString = newName.slice(-3, 3)
console.log(anotherString); //iw

const newStringOne = " penguin  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://penguin.com/penguin%20kiwi"
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log(newName.split('-'));














