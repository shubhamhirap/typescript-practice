"use strict";
exports.__esModule = true;
var isBeginner = true;
var total = 0;
var nameInfo = "Shubham";
var sentence = "My name is " + nameInfo + "\nI am learning Typescript";
console.log(sentence);
//  null and undefined both are subtypes of all other variable types
var n = null;
var u = undefined;
var isNew = null;
var userName = undefined;
// two different syntax to declare array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple type for mixed array - strict for number of parameter and sequence of variable type.
var user = ["Chris", 30];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
