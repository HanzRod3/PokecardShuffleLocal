Here are 9 practice problems on scope and scope chain in JavaScript. They range from easy to hard, and I’ve included an answer key at the end for reference if needed.

### Easy:

#### Problem 1: Global and Local Scope

1. Define a global variable `message` and set it to `"Hello!"`.
2. Inside a function `greet`, log the value of `message`.
3. Call the `greet` function.

_Hint_: Can the function access the global variable?

```javascript
let message = "Hello!";

function greet() {
  // log message here
}

greet();
```

#### Problem 2: Function Scope

1. Declare a variable `count` inside the function `counter()`.
2. Attempt to access `count` outside of the function.

_Hint_: Variables declared in functions are not accessible outside.

```javascript
function counter() {
  let count = 10;
  // console.log count here inside the function
}

// Try to log count here outside the function
```

#### Problem 3: Block Scope with Let

1. Create a for loop that iterates 3 times.
2. Declare a variable `num` inside the loop using `let` and log it in each iteration.
3. Try to log `num` outside of the loop.

_Hint_: Does the variable `num` exist outside of the block?

```javascript
for (let i = 0; i < 3; i++) {
  let num = i;
  // log num here inside the loop
}

// Try to log num here outside the loop
```

### Medium:

#### Problem 4: Nested Function Scope

1. Declare a function `outer` that contains a variable `x = 10`.
2. Inside `outer`, create another function `inner` that logs `x`.
3. Call `outer` and observe what happens.

_Hint_: Can the inner function access variables from the outer function?

```javascript
function outer() {
  let x = 10;
  function inner() {
    // log x here inside inner
  }
  inner();
}

outer();
```

#### Problem 5: Block Scope with Const and Let

1. Inside an `if` block, declare two variables: one with `let` and one with `const`.
2. Try logging both variables outside the `if` block.
3. Declare a third variable with `var` inside the same `if` block and log it outside the block.

_Hint_: Which variables will be accessible outside the block?

```javascript
if (true) {
  let a = "block scope let";
  const b = "block scope const";
  var c = "function scope var";
}

// Try logging a, b, and c here outside the if block
```

#### Problem 6: Function vs Block Scope

1. Create a function `example()`.
2. Inside the function, declare a variable `var x = 1` inside a block (`if` statement).
3. Log `x` inside and outside the block but still within the function.
4. Try logging `x` outside the function.

_Hint_: How does `var` behave inside blocks?

```javascript
function example() {
  if (true) {
    var x = 1;
    // log x here inside the block
  }
  // log x here outside the block but inside the function
}

// Try logging x here outside the function
example();
```

### Hard:

#### Problem 7: Scope Chain with Nested Functions

1. Declare a global variable `y = 5`.
2. Create a function `level1()` that has a variable `y = 10`.
3. Inside `level1`, create a function `level2()` that logs `y`.
4. Call `level2()` and check which `y` it logs.

_Hint_: Which `y` does the inner function refer to?

```javascript
let y = 5;

function level1() {
  let y = 10;

  function level2() {
    // log y here
  }

  level2();
}

level1();
```

#### Problem 8: Shadowing Variables

1. Declare a global variable `z = 3`.
2. Inside a function `test()`, declare a variable with the same name `z = 100`.
3. Inside `test`, create a block (`if` statement) and declare `let z = 200`.
4. Log `z` at each level: inside the block, inside the function but outside the block, and outside the function.

_Hint_: How does shadowing affect which `z` is accessed?

```javascript
let z = 3;

function test() {
  let z = 100;
  if (true) {
    let z = 200;
    // log z here inside the block
  }
  // log z here inside the function but outside the block
}

// log z here outside the function
test();
```

#### Problem 9: Scope Chain with Parameters

1. Create a function `multiply` that takes two parameters `a` and `b`.
2. Inside `multiply`, create a nested function `add` that logs the sum of `a`, `b`, and a local variable `c = 5`.
3. Call the `add` function inside `multiply` and observe the result.

_Hint_: What does the scope chain look like with parameters and local variables?

```javascript
function multiply(a, b) {
  let c = 5;

  function add() {
    // log a + b + c here
  }

  add();
}

multiply(2, 3);
```

---

### Answer Key:

**Easy:**

1. Problem 1: The global variable `message` is accessible inside the function.

   ```javascript
   let message = "Hello!";
   function greet() {
     console.log(message); // "Hello!"
   }
   greet();
   ```

2. Problem 2: The variable `count` is only accessible inside `counter()`.

   ```javascript
   function counter() {
     let count = 10;
     console.log(count); // 10
   }
   counter();
   console.log(count); // ReferenceError
   ```

3. Problem 3: The variable `num` is block-scoped with `let` and cannot be accessed outside the loop.
   ```javascript
   for (let i = 0; i < 3; i++) {
     let num = i;
     console.log(num); // 0, 1, 2
   }
   console.log(num); // ReferenceError
   ```

**Medium:** 4. Problem 4: `inner` can access `x` from `outer` due to the scope chain.

```javascript
function outer() {
  let x = 10;
  function inner() {
    console.log(x); // 10
  }
  inner();
}
outer();
```

5. Problem 5: `a` and `b` are block-scoped and cannot be accessed outside the `if`, while `c` (declared with `var`) is function-scoped.

   ```javascript
   if (true) {
     let a = "block scope let";
     const b = "block scope const";
     var c = "function scope var";
   }
   console.log(a); // ReferenceError
   console.log(b); // ReferenceError
   console.log(c); // "function scope var"
   ```

6. Problem 6: `var` is function-scoped, so it can be accessed inside and outside the block within the function.
   ```javascript
   function example() {
     if (true) {
       var x = 1;
       console.log(x); // 1
     }
     console.log(x); // 1
   }
   example();
   console.log(x); // ReferenceError
   ```

**Hard:** 7. Problem 7: `level2` logs `y = 10` from its parent scope (`level1`).

```javascript
let y = 5;

function level1() {
  let y = 10;

  function level2() {
    console.log(y); // 10
  }

  level2();
}

level1();
```

8. Problem 8: The `z` variable is shadowed at each level.

   ```javascript
   let z = 3;

   function test() {
     let z = 100;
     if (true) {
       let z = 200;
       console.log(z); // 200
     }
     console.log(z); // 100
   }
   test();
   console.log(z); // 3
   ```

9. Problem 9: The scope chain allows `add` to access `a`, `b`, and `c`.

   ```javascript
   function multiply(a, b) {
     let c = 5;

     function add() {
       console.log(a + b + c); // 2 + 3 + 5 = 10
     }

     add();
   }

   multiply(2, 3);
   ```
