//01 Problem Name: variableName
function my_Variable()
{
  let abc = 123;
  console.log(abc);
}

function my_Variable2()
{
  let abc = 123;
  console.log(abc);
}

// Global variale
let country = "Pakistan";
//accessing it in a function
function country()
{
  document.write(country);
}

//Now declare a variable using var in a block and try reassigning the value to that variable in another block and see if it throws an error or not

// If you declate a same variable name in another block with the same name it will generate an error.

//02  Problem Name: variableScope
var my_num  = 10;
console.log(my_num);
console.log(typeof my_num);

console.log(toString(my_num));
console.log(typeof my_num);

//

var myString = "2.3";
var myNumericValue1 = parseInt(myString);
var myNumericValue1 = parseFloat(myString);
console.log(myString);
console.log(typeof myString);

console.log(myNumericValue1);
console.log(typeof myNumericValue1);

console.log(myNumericValue2);
console.log(typeof myNumericValue2);


//03 Problem Name: checkVariable
function myFunction()
{
  var my_name = "Syed Khalil";
  console.log(my_name);
  console.log(typeof my_name);
}

//Topic Operator and Task # 4

var num1 = 5;
var num2 = 10;

var add = num1 + num2;
var mul = num1 * num2;
var dvd = num1 / num2;

alert("The Sum of num1 and num2 is " +add);
alert("The Multiplication of num1 and num2 is " +mul);
alert("The Division of num1 and num2 is " +dvd);



//Topic: Increment Operator and task # 5

function clickIncrement()
 {
    var n = 0;
    n = n +5;
    return n;
}
