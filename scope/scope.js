// short cuts
function sec(question) {
  console.log(
    `<---------|{*_*}|{*_*}|**Q*U*E*S*T*I*O*N**#${question}|{*_*}|{*_*}|--------->`
  );
}

let name = "Alice";

function greet() {
  let name = "Bob"; // is created  within the greet() and given the value off Bob
  console.log(`Hello, ${name}!`); // logging  a back tick string pasing the variable name with e value Bob
}

greet(); // Hello, Bob!
console.log(name); // "Alice" since there are two names but the names do not override each other since they live in different scopes

sec(1);

let message = "Hello!";
function greet2() {
  console.log(message);
}
greet2();

function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
sec(2);

if (true) {
  let a = "block scope let";
  const b = "block scope const";
  var c = "function scope var";
}
// console.log(a); error
// console.log(b); error
console.log(c);
sec(3);

function example() {
  if (true) {
    var x = "VARIABLE";
  }

  console.log(` inside thefunction but outside the code block : ${x}`);
}
example();
// console.log(`outside the function: ${x}`);
sec(4);

y = 5;
function level1() {
  let y = 10;
  function level2() {
    console.log(`coming from level:${y}`);
  }
  level2();
}
level1();
sec(7);

let z = " Global Variable";
function test() {
  let z = "###Fucntion Variable###";
  console.log(` Before the if statement: ${z}`);

  if (true) {
    let z =
      " i overwrote ###Function Variable### and i am now ##Block function##";
    console.log(z);
  }
}
console.log(z);
test();

sec(8);
function multiply(a, b) {
  let c = 5;
  function add() {
    console.log(a + b + c);
  }
  add();
}
multiply(4, 5);
sec(9);
