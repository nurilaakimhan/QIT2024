var a = 20; //
var b = 100;

console.log(a == b); // ten ekenin tekseru
console.log(a > b); // salystyru
console.log(a < b);
console.log(a != b); //! = ten emes

var a = 5;
var b = 3;

console.log(a >= b); // true
console.log(a <= b); // true

var a = 5;
var b = 3;
var c = 4;

console.log((a>b) && (c<a)) // true

var a = 5;
var b = 3;
var c = 4;

console.log((a<b) || (c<a)) // true

var a = 3;
var b = 4;
console.log(a + b < 4 || a > 0); // true

var isOffRoad = false;

console.log(!isOffRoad); // !false = true

console.log(3 != 4); // true

let age = 18;
let hasTicket = true;
let isVIP = false;

if ((age >= 18 && hasTicket) || isVIP) {
    console.log("Ruqsat");
}else{
    console.log("Bolmaidy");
}

var engine = 2.0;
var color = 'black';
var year = 2010;

if (color == 'back' && year >= 2012) {
    console.log("Osy mashina bolady");
}else if (engine >2.0) {
    console.log("OK")
}else {
    console.log("Mashina muldem jaramaidy");
}

var a = 30;

console.log (a >= 12 && 45 >= a);

var a = 20;

console.log(a % 2 == 0 && a >= 20 && 50 >= a); 

var a = 15;
var b = 17;
var p = (a + b) * 2;

console.log((a == b) && (p >= 30 && p <= 40));

var a = 15;
var b = 15;

console.log(a % 3 == 0 || b % 5 == 0);

var temp1 = 20;
var temp2 = 40;

console.log(temp1 <= 25 && 30 <= temp2);

var a = 70;
var b = 10;
var c = a - b;

console.log(c >= 50 && b <= 20);

score1 = 30;
score2 = 60;
score3 = 85;
averageScore = 70;

console.log()
