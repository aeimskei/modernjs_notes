# If Else Statements & Comparison Operators

If statement is used to evaluate some kind of condition and then do something based on that condition, or something else if that condition is not met.

## Simple Syntax

If something is true, do something. Else, do something else. Basic syntax:

```
if (something) {
  do something
} else {
  do something else
}
```

Note: ```=``` is used for value assignment to a variables. ```==``` is used for comparing.

## Equal Comparison Operators (Equal To)
This ```==``` is just testing the value, it's not testing the type. If ``const id == '100'`` to a string of 100, you'll still get Correct! bc in this case, it doesn't matter if it's a string or a number, it's still 100. This isn't really the way you want to do it most times. Rather, you should be testing the value and the type with ```===``` bc it'll stop a lot of issues and errors from arising later.

```
const id = 100;             // Switch between const id = '100' string
```

```
if (id == 101) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');        // Logs Incorrect!
}
```

## Not Equal To

```
if (id != 101) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');        // Logs Correct!
}
```

## Equal to Value and Type
If ``const id == '100'`` to a string of 100, you'll still get Incorrect! bc in this case inside the if statement, the value is a number, not a string.

```
const id = '100';
```

```
if (id === 101) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');        // Logs Incorrect!
}
```

## Not Equal Value and Type
You can also do not equal for value and types with ```!==```

```
if (id !== 101) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');        // Logs Incorrect!
}
```

## Test if ```const id``` is undefined with typeof
This is if you want to test if something is undefined, meaning like it's not there at all, then you want to use ```typeof id !== 'undefined'```

```
if (typeof id !== 'undefined') {
  // use template literal
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID!');
}
```

## Else If
```
const color = 'blue';               // Change between red, blue and yellow

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue')
}
```

# Logical Operators
If we want to test more than one thing, use these operators. In this example, we're combining if-else statement and logical operators.

## ```&&``` operator represents AND
The ```&&``` operator makes sure that both conditions you want are true.

```
const name = 'Steve';
const age = 28;                   // Change the age value number

if (age > 0 && age < 12) {
  // use template string again
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}
```

## ```||``` operator represents OR
The ```||``` operator checks that only one among the conditions is true.

```
const name = 'Nancy';
const age = 4;                   // Change the age value number

if (age < 16 || age > 65) {
  console.log(`${name} cannot run in marathon`)
} else {
  console.log(`${name} can register for the marathon`)
}
```

## Ternerary Operator
Is the shorthand way of doing conditionals. The ternerary operator is available in most programming languages.

In this example, log our correct or incorrect if doesn't meet condition. You'll notice that the line of code is much shorter.
* if ```val === 100``` is true,
* ```?``` then output Correct!
* ```:``` else output Incorrect!

```
const val = 101;                  // Change value of val number

console.log(val === 100 ? 'Correct!' : 'Incorrect!');
```

## Without ```{}``` Braces
In JavaScript, the ```{}``` are actually optional, though recommended.
```
const num = 100;

if (num === 100)
  console.log('Correct!');
else
  console.log('Incorrect!');
```