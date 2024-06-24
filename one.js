//var b;

//a = 50;
//console.log(a);
//var a = 35;
//console.log(a);
//var a = 45;
//console.log(a);

//var b = 28;
//console.log(b);

//var c = 12; functional scope//
//{
// var c = 11;
//console.log(c);

//}
//console.log(c);

//let d = 66;
//d = 23;
//console.log(d);

// let e = 89;
// {
//   console.log(e);
//}
//console.log(e);


//{
// let f = 91;
//console.log(f);
//}
//console.log(f);

//const g = 32;
//const g = 54;
//g = 46;
//console.log(g);

//const h = 32;
//{
//console.log(h);
//}
//console.log(h);

//{
// const i = 92;
// console.log(i);
//}
//console.log(i);

//var $_a12 = 34;
//console.log($_a12);


/*primitive datatypes
var a = 45;
console.log(a);
console.log(typeof (a));

var b = '45 John';
console.log(b);
console.log(typeof (b));

var c = true;
console.log(c);
console.log(typeof (c));

var d;
console.log(d);
console.log(typeof (d));

var e = null;
console.log(e);
console.log(typeof (e));


var f = BigInt(123456789123456789123456789123456789123456789123456789123456789123456789123456789);
console.log(f);
console.log(typeof (f));


var g = Symbol('hello');
console.log(g);
console.log(typeof (g));*/


/*Non primitive datatypes
var arr = ["apple", "berry", "mango", "banana", "custard"]
console.log(arr);
console.log(typeof (arr));
console.log(arr[3]);
console.log(arr[1]);
console.log(arr[4]);*/

/*Non-primitive datatype->object 
//object
var a = {
    name: "Akaay",
    place: "England",
    Age: 5
}
console.log(a);
console.log(typeof (a));
console.log(a.place);
console.log(a.Age);
//console.log(a[0][1]);

var b = [
    {
        name: "shiv",
        age: "25"
    },
    {
        name: "pari",
        age: "24",
        place: "punjab"
    },
    12,
    true
]
console.log(b[0].name);
console.log(b[1].place);
console.log(b[1].age);
console.log(b[3]);


//arthimetic operators ---> =,-,*,/,**,
var a = 2;
var b = 7;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a ** b;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(a ** 10);
console.log(g);

var e = 5;
console.log(e++);//5-post-decrement
console.log(e);//6
console.log(++e);//7-pre-decrement
console.log(e);//7

var h = 20;
console.log(h--);//20-post-decrement
console.log(h);//19
console.log(--h);//18-pre-decrement
console.log(h);//18

var q = "Hello ";
var z = 24;
var r = 54;
console.log(q + z);
console.log(q + z + r);
console.log(z + q + r);

var q = "Hello";
var z = 24;
var r = 54;
var c = "Hi"
console.log(q + z);
console.log(q + z + r);
console.log(z + q + r);
console.log(c + z + r + q);

//assignment operators-> =,=+,=-,=*,=/,

var b = 23;
var c = 54;
e = b / c;
console.log(e);
a = b + c;
console.log(a);
d = b - c;
console.log(d);
f = b * c;
console.log(f);

//conditional operators--> >,<,>=,<=,==,!=,===

var e = 78;
var f = 23;

console.log(e > f);
console.log(e >= f);
console.log(e < f);
console.log(e <= f);
console.log(e == f);

var g = "24";
var h = 24;
var i = 13;
var j = 24;
console.log(g == h);
console.log(g != h);
console.log(h === g);
console.log(h === j);
console.log(h === g);
console.log(g !== h);*/

/* ternary operator

var one = 90;
var two = 30;
var three = one < two ? "the value is correct" : "the value is wrong";
console.log(three);


//logical operators --> and-&& , or--||, not--!
var a = 12;
var b = 14;
var c = 13;

var d = a < b && b > c;
console.log(d);

var e = a < b || b < c;
console.log(e);

var f = a != b;
console.log(f);*/

// if-else pgm
var d = 24;
var e = 26;
if (d < e) {
    console.log("correct");
}
else {
    console.log("false value");
}

//voting eligiblity program  using if-else condition
var age = 24;
console.log(typeof (age));
if (age < 18) {
    console.log("not applicable to vote")
}
else if (age > 18) {
    console.log("Applicable for vote")
}
else {
    console.log("Invalid format")
}
