System.register([], function(exports_1) {
    "use strict";
    var Burn;
    return {
        setters:[],
        execute: function() {
            Burn = (function () {
                function Burn() {
                    this.name = "Burn";
                    this.cost = 15;
                    this.damage = 150;
                }
                Burn.prototype.cast = function (target) {
                    target.attack(this.damage);
                };
                return Burn;
            }());
            exports_1("Burn", Burn);
        }
    }
});
