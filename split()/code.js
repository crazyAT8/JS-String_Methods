let text = "This is an example of the split method"                                          //declare a string variable
const exampleArray = text.split(" ");                                                                 // declare another variable that uses split on your string variable  

document.getElementById("ex1").innerHTML = exampleArray;                        // call the second variable to an id in the DOM

let text2 = "This is what happens when you don't leave a space in the quotation marks";
const example2Array = text2.split("")

document.getElementById("ex2").innerHTML = example2Array;

document.getElementById("ex3").innerHTML = exampleArray[1];

//Limit parameter

let text3 = "This is what happens when you apply a limit parameter";
const exampleArray3 = text3.split(" ", 4);

document.getElementById("ex4").innerHTML = exampleArray3;