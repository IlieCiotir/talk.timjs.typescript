//  let const
var a = 1;
var b = 3;
// show case let in for
for (var i = 0; i < 100; i++) {
    var c = i;
    var b_1 = i; // this works.. ?
}
// types
// primitives
var myAwesomevar = 'wqwe';
var myAwesomeNumber = 1;
var myAwesomeBoolean = true;
// arrays
var myAwesomeArray = [1, 2, 3, 4, 5];
var myOtherAwesomeArray = [true, false];
// enums
// simple
var Languages;
(function (Languages) {
    Languages[Languages["Javascript"] = 0] = "Javascript";
    Languages[Languages["Typescript"] = 1] = "Typescript";
    Languages[Languages["Java"] = 2] = "Java";
    Languages[Languages["CSharp"] = 3] = "CSharp";
})(Languages || (Languages = {}));
Languages.CSharp == Languages.Typescript;
var language = Languages[1]; // access as array
// different start point
var Languages2;
(function (Languages2) {
    Languages2[Languages2["Javascript"] = 1] = "Javascript";
    Languages2[Languages2["Typescript"] = 2] = "Typescript";
})(Languages2 || (Languages2 = {}));
// other values
var Languages3;
(function (Languages3) {
    Languages3[Languages3["Javascript"] = 'AWesome'] = "Javascript";
    Languages3[Languages3["Typescript"] = 'UberAwesome'] = "Typescript";
})(Languages3 || (Languages3 = {}));
// any  start with this?
var anything = 1;
anything = 'abc';
// function, void
function doSomething() {
    console.time();
}
// function, return
function doSomethingAndReturn() {
    return Languages;
}
doSomethingAndReturn().Java;
// parameters
function doSomethingWithThis(a) {
    return a + '';
}
doSomethingWithThis(5).toUpperCase();
// interfaces
// inline
function anotherMethod(person) {
    person.name;
}
anotherMethod({ name: 'ion', age: 20 });
var f;
f = anotherMethod;
var person = { name: 'ilie', age: 5, nationality: 'javascript' };
anotherMethod(person); // refactor the other methods to use this interface?
