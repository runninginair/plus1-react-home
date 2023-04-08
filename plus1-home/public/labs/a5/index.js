// 2.2 Loading External JavaScript Files
// alert('Hello World!');

// 2.3 Writing to the Console
console.log('Hello World!');

// 2.4 Variables and Constants
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

// 2.4.1 Variable Types
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);

let isNumber = typeof numberVariable;
let isFloatingPointNumber = typeof floatingPointNumber;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(isNumber);                  //number
// console.log(isFloatingPointNumber);     //number
console.log(isString);                  //string
console.log(isBoolean);                 //boolean

// 2.4.2 Boolean Variables
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1;
let notTrue = '1' === 1;

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);


// 2.5 Conditionals

// 2.5.1 If Else
console.log('If else');
if (true1) {
    console.log(true);
}
if (!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// 2.5.2 Ternary Conditional Operator
console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);


/** 2.6 Functions
 * Functions allow reusing an algorithm by wrapping it in a named, parameterized block of code.
 * JavaScript supports two styles of functions based on the history of language.
 */

/** 2.6.1  Legacy ES5 function
 * Declaring functions consists of wrapping a block of code, naming it, and declaring 
 * parameters as shown below. In ECMAScript 5 (ES5) and earlier, the syntax for functions is
 * 
 * function <functionName> (<parameterList>) { <functionBody> }
 */
console.log('Legacy ES5 function')
function add(a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);               // 6

/** 2.6.2 New ES6 arrow functions
 * A new version of JavaScript was introduced in 2015 and is officially referred to as
 * ECMAScript 6 or ES6. A new syntax for declaring functions was introduced which is less
 * verbose and provides tons of new features we'll explore throughout this course. 
 * This function syntax is often referred to as "arrow functions". 
 */
console.log('New ES6 arrow functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);             // 2

/** 2.6.3 Implied returns
 * One of the new features of the new ES6 functions is implied returns, that is, if the body
 * of the function consists of just returning some value or expression, then the return
 * statement is optional and can be replaced with just the value or expression.
 */
console.log('Implied return')
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);             // 20

/** 2.6.4 Optional parenthesis and parameters
 * Another new feature is optional parameter parenthesis if functions have only one parameter.
 */
console.log('Parenthesis and parameters');
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);



/** 2.7 Arrays
 * Arrays can group together several values into a single variable. Arrays can group
 * together values of different datatypes, e.g., number arrays, string arrays, and even
 * a mix and match of datatypes in the same array. Not that you would ever want to do that.
 */
console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log(numberArray1);      // (5) [1, 2, 3, 4, 5] 
console.log(stringArray1);      // (2) ['string1', 'string2']
console.log(variableArray1);    // (5) [2, 5, 7, Array(5), Array(2)]

/** 2.7.1 Array index and length
 * The length of an array is available as property .length in the array variable. 
 * The .indexOf() function allows finding where a particular array member is found.  
 */
console.log('Array index and length');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);


/** 2.7.2 Adding and Removing Data to/from Arrays
 * In most languages arrays are immutable, whereas in JavaScript we can easily add or
 * remove elements from the array. The .push() function appends an element at the end of
 * an array. The .splice() function can remove/add an element anywhere in the array.
 */
console.log('Add and remove data to arrays');
// adding new items
numberArray1.push(6);
// console.log(numberArray1);      // (6) [1, 2, 3, 4, 5, 6]
stringArray1.push('string3');
// console.log(stringArray1);      // (3) ['string1', 'string2', 'string3']
numberArray1.splice(2, 1);      // remove 1 item starting on the 3rd spot
stringArray1.splice(1, 1);      // remove 1 item starting on the 2nd spot
console.log(numberArray1);      // (5) [1, 2, 4, 5, 6]
console.log(stringArray1);      // (2) ['string1', 'string3']


// // More .splice() examples:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // At position 2, add 2 elements: 
// fruits.splice(2, 0, "Lemon", "Kiwi");
// // (6) ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
// console.log(fruits);
// fruits.splice(3, 1, "Pear", "Grape");
// // (7) ["Banana", "Orange", "Lemon", "Pear", "Grape", "Apple", "Mango"]
// console.log(fruits);

// 2.7.3 For Loops
console.log("For loops");
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}



/** 2.7.4 The Map Function
 * An array's map function can iterate over an array's values, apply a function to each
 * value, and collate all the results in a new array. The first example below iterates
 * over the numberArray1 and calls the square function for each element. The square
 * function was declared earlier in this document and it accepts a parameter and returns
 * the square of the parameter. The map function collates all the squares into a new
 * array called squares as shown below. The second example does the same thing, but uses
 * a function that calculates the cubes of all numbers in the same numberArray1 array.
 */
console.log('Map function');
const squares = numberArray1.map(square);
// console.log(square);           // a => a * a
const cubes = numberArray1.map(a => a * a * a);
// console.log(numberArray1);  // (5) [1, 2, 4, 5, 6]
console.log(squares);          // (5) [1, 4, 16, 25, 36]
console.log(cubes);            // (5) [1, 8, 64, 125, 216]


/** 2.7.5 The Find Function
 * An array's find function can search for an item in an array and return the element
 * it finds. The find function takes another function as an argument that serves as a
 * predicate. The predicate should return true if the element is the one you're looking
 * for. The predicate function is invoked for each of the elements in the array and
 * when the function returns true, the find function stops because it has found the
 * element that it was looking for.
 */
console.log('Find Function');
const four = numberArray1.find(a => a === 4);
console.log(four);          // 4
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3);       // string3
// const fourty = numberArray1.find(a => a === 40);
// console.log(fourty);    // undefined

// 2.7.6 The Find Index Function
console.log('Find index');
const fourIndex = numberArray1.findIndex(a => a === 4);
console.log(fourIndex);         // 2
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(string3Index);      // 1
// const stringXIndex = stringArray1.findIndex(x => x === 'stringX');
// console.log(stringXIndex);      // -1


// 2.7.7 The Filter Function
console.log('Filter Function');
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(numbersGreaterThan2);   // (3) [4, 5, 6]
console.log(evenNumbers);           // (3) [2, 4, 6]
console.log(oddNumbers);            // (2) [1, 5]


/** 2.8 Template Strings
 * Generating dynamic HTML consists of writing code that manipulates and concatenates 
 * strings to generate new HTML strings based on some program logic. Basically consists
 * of one language writing code in another language, much what a compiler does. Working
 * with strings can be error prone especially if you have to use lots of extra operations
 * and variables to concatenate the resulting string. JavaScript template strings provide
 * a better approach by allowing embedding expressions and algorithms right within
 * strings themselves.
 */
console.log('Template Strings');

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)

/** 2.8.1 Writing to the DOM ---- Check the browser not the console
 * All the exercises we've gone through so far have written their output to the console.
 * Although useful, it's not nearly as exciting as writing to the DOM (Document Object Model).
 * JavaScript can manipulate the DOM, the browser's in memory representation of an HTML
 * document. New content can be created writing HTML strings to the DOM. The DOM is
 * represented in JavaScript by the global variable document.
 */

/** 2.9 Loading jQuery library
Although it is entirely possible to use pure JavaScript to build fully functional
Web applications, it is significantly easier if we use libraries such as jQuery
which provide tons of great prebuilt functions that simplify interacting with the
DOM. The jQuery library can be installed by loading it from a CDN as shown below.

index.html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

Linking scripts from a CDN is preferable in production environments. Alternatively
you can download the library into your local vendors directory and then link it as
shown below. Make sure to add the library before the existing index.js since it
will require variables and functions declared by the jQuery library.

index.html
<script src="../../vendors/jquery/jquery-3.6.0.min.js"></script>
<script src="index.js"></script>
 */

/** 2.10 Executing jQuery scripts
 * The jQuery script declares global function called jQuery and its alias $.
 * The jQuery function can manipulate the DOM in many different ways, but
 * a common practice is to pass it an initialization function.
 */
const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */

    /** 2.11 Binding to the DOM
     * One of jQuery's strength is to bind to the DOM by referring to different parts
     * using CSS selectors. The examples below reference DOM elements in the left using
     * CSS strings. For instance, the H2#bind-by-id heading is referenced with 
     * $('#bind-by-id') and storing it in a variable for further processing.
     */
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('2.11 Binding to DOM');
    console.log(bindById);          // S.fn.init [h2#bind-by-id]
    console.log(bindByClass);       // S.fn.init(2) [h3.bind-by-class, h3.bind-by-class, prevObject: S.fn.init(1)]

    /** 2.12 Changing style programmatically
     * Once jQuery binds to a DOM element, we can use all sort of methods to manipulate
     * the DOM element. In this example we modify a DOM's style using the css method.
     */
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    /** 2.13 Getting and setting attributes
     * We can also modify an element's attributes by using the attr method.
     * The example below reads the ID attribute of the heading element.
     */
    console.log('2.13 Get and set attributes');
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);        // Console Ouput: get-id-attr

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    /** 2.14 Adding and removing classes
     * Modifying an element's class attribute is such a common task that
     * jQuery provides dedicated methods addClass and removeClass.
     * The example below adds class class-1 to the heading.
     */
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    /** 2.15 Hiding and showing content
     * The jQuery library provides methods hide and show.
     */
    const hideMe = $("#hide-me");
    hideMe.hide();
    const showMe = $("#show-me");
    showMe.show();

    /** 2.16 Creating new elements
     * Beyond binding to already existing DOM elements, jQuery can also create
     * brand new elements and add them to the DOM. 
     * To create an element, provide an HTML string to the jQuery or $ function.
     */
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    /** 2.17 Appending new elements
     * To actually add new content to the DOM use functions such as append. see follows.
     */
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);

    // 2.18 Removing and emptying content
    const removeLi = $("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // 2.19 Changing content
    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`<li>Line item A</li>
                         <li>Line item B</li>
                         <li>Line item C</li>`);

    /** 2.20 Navigating up and down the DOM tree
     * 
     * We often need to refer to DOM elements that are nested within another DOM or is
     * the parent of some element.
     * 
     * The parents() function returns an array of elements that are parents of an element
     * all the way up to the root of the HTML document.
     * 
     * The find() function returns an array of elements that are children of the current
     * element.
     * 
     * Both accept CSS selectors to filter parents or children that match the selector.
     */
    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1.css('background-color', 'red')
        .css('color', 'white');

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue');

    // 2.21 Handling click events
    /** 2.21 Handling click events
     * The jQuery library can handle all sorts of events generated by the user. 
     * The most common event is clicking the mouse.
     */
    const handleClick = () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    /** 2.22 Event target
     * We often need to determine the UI element that a user clicked on.
     * This is available in the "target" attribute of the "event" generated by the user.
     * 
     * @param {*} event 
     */
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);


    /** 2.23 Hiding and showing content
     * We can combine event handlers with DOM manipulation to achieve useful behaviors.
     * In this example we handle click events to either hide or show DOM elements.
     */
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

}
$(init);

// End //