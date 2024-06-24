// dialog boxes
//var a = 34;
// var b = 67;
// var c = a + b;
//alert(c);
//confirm(c);
//prompt(c);


//var age = Number(prompt('Enter the age to appeal for vote')); {
//if (age < 18) {
//alert('Not appeal for vote');
// }

//else if (age >= 18) {
//alert('Appeal to Vote');
//}
//else {
// alert('Invalid Format');
//}
//}

/*var age = Number(prompt('enter the age to pay fee')); {
    if (age <= 5) {
        alert('free entry');
    }
    else if (age >= 5 && age < 10) {
        alert('Pay ₹ 5');
    }
    else if (age >= 10 && age < 20) {
        alert('Pay ₹ 10');
    }
    else if (age >= 20 && age < 30) {
        alert('Pay ₹ 20');
    }
    else if (age >= 30 && age < 40) {
        alert('Pay ₹ 40');
    }
    else {
        alert('Invalid Format');
    }
}*/



/*var num1 = Number(prompt('Enter Number 1'));
var num2 = Number(prompt('Enter Number 2'));
var operation = prompt('Enter operands');
switch (operation) {
    case '+':
        alert('Addition of two numbers :' + (num1 + num2));
        break;

    case '-':
        alert('Subtraction of two numbers :' - (num1 - num2));
        break;

    case '*':
        alert('Multiplication of two numbers :' * (num1 * num2));
        break;
    case '/':
        alert('Division of two numbers :' / (num1 / num2));
        break;
    default:
        alert('Give the Proper numbers to perform operation')
}*/

//loops
//while loop
/*var i = 0;
while (i <= 10) {
    console.log(i++) ---> o/p will be 0,1,2,3,4,5,6,7,8,9,10;
}*/

//do-while loop
/*var k = 2;
do {
    console.log(k++);
}
while (k <= 12); --> o/p willbe 2,3,4,5,6,7,8,9,10,11,12*/

//for loop
/*for (var i = 0; i <= 20; i++) {
    console.log(i);
    output will be 0 1 2 3 4 5 6 7 8 9 10
}*/
/*for (var j = 10; j >= 1; j--) {
    console.log(j);
    output will be 10 9 8 7 6 5 4 3 2 1

}*/
//for in loop using array
/*var a = [12, 45, 67, 89, 90];
console.log(a); output:
for (let x in a) {
    console.log(a[x]);
    console.log(a[x] * 2); output:24,90,134,178,180
    console.log(x);
}*/

var b = {
    name: "Shreyas",
    age: 27,
    place: "Kolkata"
}
for (let y in b) {
    console.log(b[y]);
    console.log(b);
}

var one = [10, 14, 19, 24, 26, 52, 51];
for (let best of one) {
    console.log(best);
}

var two = {
    name: "panth",
    age: 30,
    place: "Delhi"
}
for (let bad of two) {
    console.log(bad);
}