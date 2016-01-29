var a = 5;
var b = 'abc';
for (var i = 0; i < 100; i++) {
    var c_1 = 2;
    var b_1 = 2;
}
var c;
var d;
var e;
var f;
var favNumbers = [1, 2, 4, 5, 6];
var notSoFavNumbers = [12, 12];
var first = favNumbers[0], second = favNumbers[1], rest = favNumbers.slice(2);
favNumbers.push(1, 2, 3);
var Language;
(function (Language) {
    Language[Language["Java"] = 0] = "Java";
    Language[Language["Javascript"] = 1] = "Javascript";
    Language[Language["C"] = 2] = "C";
})(Language || (Language = {}));
var preferred = Language.C;
function doSomething(x, occupation) {
    return x.name + 'I did it!';
}
var eu = { name: 'Ilii', age: 5, preferredLanguage: Language.C };
doSomething(eu);
function ping(pong) {
    pong('m');
}
ping(function (m) { console.log('Pong'); });
var Presenter = (function () {
    function Presenter(name, age) {
        this.name = name;
        this.age = age;
    }
    Presenter.prototype.present = function () {
        console.log("Hello my name is " + this.name + " blablablabla \n        blablablablab\n        blablablabla");
    };
    Presenter.prototype.giveInterview = function (interview) {
        var _this = this;
        interview(function () { return _this.present(); });
    };
    Object.defineProperty(Presenter.prototype, "description", {
        get: function () {
            return this.name + " is awesome";
        },
        enumerable: true,
        configurable: true
    });
    return Presenter;
}());
var presenter = new Presenter('Ilii', 27);
