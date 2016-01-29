var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = 5;
var b = 'awe';
for (var i = 0; i < 100; i++) {
    var c_1 = 5;
    var b_1 = 5;
}
var c;
var d;
var e;
var f;
var favNumbers = [1, 2, 3, 4];
var Languages;
(function (Languages) {
    Languages[Languages["Java"] = 10] = "Java";
    Languages[Languages["Javascript"] = 11] = "Javascript";
    Languages[Languages["Csharp"] = 12] = "Csharp";
})(Languages || (Languages = {}));
var preferredLanguage = Languages.Csharp;
function doSomething(x, ocupataion) {
    return x.nume + '5';
}
var ilie = { nume: 'Ilie', age: 2 };
doSomething(ilie);
var pong = function (m) { return 1; };
var v = pong;
v.name = 5;
function ping(pong) {
    pong('m');
}
var Om = (function () {
    function Om() {
    }
    return Om;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Presenter = (function (_super) {
    __extends(Presenter, _super);
    function Presenter(nume, age) {
        _super.call(this);
        this.nume = nume;
        this.age = age;
    }
    Presenter.prototype.prezent = function () {
        console.log();
    };
    Object.defineProperty(Presenter.prototype, "description", {
        get: function () {
            return this.nume + " Is awesome";
        },
        enumerable: true,
        configurable: true
    });
    return Presenter;
}(Om));
var p = new Presenter('Ilie', 2);
p.prezent();
