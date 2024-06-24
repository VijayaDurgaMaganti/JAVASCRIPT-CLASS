//eventlistener methods
addEventListener("click", Hi)
function Hi() {
    this.document.getElementById("one").innerHTML = "Helloyou clicked the button";
}

two.addEventListener("change", () => {
    alert("Hi everyone");
})

//callback function:
/*function function1(cbf) {
    console.log("codegnan");
    cbf();
}


function1(function2);
function function2() {
    console.log("destination");
}

function function1(cbf, a, b) {
    console.log("codegnan");
    cbf();
    c = a + b;
    console.log(c)

}
function1(function2, 98, 23);
function function2() {
    console.log("destination");

}*/

//using second function and passing arguments in first function

function function1(cbf1, cbf, a, b) {
    cbf1();
    console.log("codegnan");
    cbf(3, 4);
    c = a + b;
    console.log(c)

}
function1(function3, function2, 98, 23);
function function2(d, e) {
    console.log("destination");
    f = d * e;
    console.log(f);

}

//using function3 pass arguments in funtion1 and print frontend developers
function function3() {
    console.log("FRONTEND DEVELOPERS")
}

//javascript is a asynchronous programming language.
// intervals
function Hello() {
    console.log("HELLO WORLD");

}
setInterval(Hello, 8000);
function Hi() {
    console.log("enjoy the day!");
}
//setInterval(Hi, 7000);

let count = 0;

function counter() {
    count += 1;
    console.log(count);
}
let intervalId = setInterval(counter, 2000);
//after certain time the function should stop for that we use setTimeOut()
setTimeout(() => {
    clearInterval(intervalId);
    console.log("I have cleared the function after 8 seconds");
})