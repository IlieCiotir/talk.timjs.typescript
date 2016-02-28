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
var personIerator = function (predicate) {
    predicate({ name: 'Ion', age: 22 });
};
personIerator(function (p) { return p.age > 18; });
// classes
var Presenter = (function () {
    function Presenter(name, theme) {
        this.theme = theme;
        this.name = name;
    }
    Presenter.prototype.present = function () {
        console.log(this.title);
    };
    Object.defineProperty(Presenter.prototype, "title", {
        get: function () {
            return this.name + " is presenting " + this.theme;
        },
        enumerable: true,
        configurable: true
    });
    return Presenter;
})();
var presenter = new Presenter('Ilie', 'Typescript');
presenter.present();
"string text " + person.name + " string text";
var ErrorKindA = (function () {
    function ErrorKindA() {
    }
    ErrorKindA.prototype.getError = function () {
        return this.errorMessage;
    };
    return ErrorKindA;
})();
var ErrorKindB = (function () {
    function ErrorKindB() {
    }
    ErrorKindB.prototype.getInformation = function () {
        return this.information;
    };
    return ErrorKindB;
})();
var Child = (function () {
    function Child() {
    }
    Child.prototype.getThing = function () {
        return this.otherThing;
    };
    return Child;
})();
var y = new Child();
applyMixins(y, [ErrorKindA]);
applyMixins(Child, [ErrorKindA, ErrorKindB]);
var x = new Child();
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
