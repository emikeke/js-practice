"use strict";
// Basic Types
let id = 5;
let company = "Emily Ke";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Emily", true];
// Tuple Array
let employee;
// Union
let pid = 22;
// Enums 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion 
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
// Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const P1 = 1;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
console.log("ID:", id);
x = true;
ids.push(1);
employee = [
    [1, "Emily"],
    [2, "Emi"],
    [3, "E"]
];
pid = "22";
console.log(Direction1.Right);
console.log(Direction2.Right);
customerId = 2;
console.log(addNum(1, 2));
