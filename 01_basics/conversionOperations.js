let score = "35abc"
console.log(typeof score);
//can write like this also
console.log(typeof (score));

let valueInNum = Number(score)
console.log(typeof valueInNum);
console.log(valueInNum);  //nan[not a number]

let isLoggedIn = "hgdui" //true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 = true , 0 = false , " " =  false , "hjdyu" = true 
*/

let someNum = 33
let stringNumber = String(someNum)
console.log(stringNumber); //33
console.log(typeof stringNumber); //string

//---------------------Operations------------------

let value = 3
let NegValue =-value
console.log(NegValue);

console.log(2+2);
console.log(2**2);
console.log(2%3);

let str1 ="hello"
let str2 = "world"

let str = str1 + str2
console.log(str);

console.log("1" + 2); //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2); //122
console.log(2 + 3 + "2"); //52

let a = 100
++a; //101
//a++;  //101
console.log(a);









