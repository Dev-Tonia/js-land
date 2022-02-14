// JavaScript is the world's most popular programming language.
// script is best put on the last section on the body tag of html document. these helps improve the display speed of the webpage.
//A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.
/////// What Javascript Can do////
/* 1. it can change html content.
2. it can change html attribute
3. it can change html style
4. it can hide html elements
5. it can show html elements
Basically these 5 times are what the javascript can be doing on the web.
*/

// where to place the script tag./////
/*
The script tag can place either as an in line in html element or it is used as a internal or external script.
The recommanded style is the external javascript as it allows you to make use of 1 code base in different project.

 */

// JavaScript Display Possibilities
/*
to display data in javascript can be done using either
1. innerHTML: these is the most way to display data in javascript.
2. document.write(): this is not recommended as it will wipe all the data the html file has only displaying the result from the js file.
3. window.alert(): it is also depracted as using pop-up is the in thing.
5.console.log(): these method aids debugging.
 */

//JavaScript Statements
/*
A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.
Javascript statements comprises of values, operators, expressions etc.
Semicolons (;) are added at the add of every statement in javascript. 
e.g let a, b, c;
a = 5;
b = 6;
c = a + b;
console.log(a, b, c);
 these are javascript statemate.
 */
let a, b, c;
a = 5;
b = 6;
c = a + b;
console.log(a, b, c); // these are javascript statemate.
// javascript ignores white space and line breakes.

// JavaScript Syntax
/**
 syntax are set of rules that a program needs to perform
 
 */
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
// javascript values can be fixed value or variable values fixed values are called literals ande vareable values are called variables. .
/**
 JavaScript Literals
These are numbers and strings.
Numbrers: can be written without quotes
string: these are texts and it can be written either with single(' ') or double quotes(" ").
 */

//examples
("Tonia");
("Tonia");
23;
// JavaScript variable
// Variables are containers for storing data (storing data values).
// javascript variable can be declared using  either let, var and const.

// how to create a variable
var x = 3;
let m = 4;
// JavaScript Operators
// these are mathmatical operators to compute values (+ - * / = )
/**
 * + : is use for concating two values(these can be a text or a number) together it also performs it's traditional addition.
 * - : is use for substracting two numbers
 * = : it is used to asign a valuw to a variable, it is not the normal equal to.
 */

//  JavaScript Expressions
// it is a combination of values , variables and operators which is evalutes. eg
let add = 34 + 34;
// javascript Name
/**
 * in naming a variable in js is advice for the name to start with
 * 1 a letter either a -z or A - Z
 * 2 A DOLLAR SIGN $
 * 3 an underscore _
 * in between it can contain anything like numbers hypen etc.
 * JS variables are case  sensitive. eg.
 */
let lastName, lastname;
// the two are complete different things.

// JS naming convention
/**
 * in naming variables that contain more than one word  different approach has been used like
 
 * 1 Hypen eg last-name : this name convection is not supported in javascript has it reveserd only for minus in javascript.
 * 2 underscore  eg last_name
 * 3 upper camel case (pascal case) eg FristName
 * 4 lower camelcase eg lastName  : this the accepted naming convection in among JS developers
 */
