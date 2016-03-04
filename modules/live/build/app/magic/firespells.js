System.register([], function(exports_1) {
    "use strict";
    var Burn;
    return {
        setters:[],
        execute: function() {
            Burn = (function () {
                function Burn() {
                    this.name = "Burn";
                    this.damage = 150;
                    this.cost = 10;
                }
                Burn.prototype.cast = function (target) {
                    target.takeDamage(this.damage);
                };
                return Burn;
            }());
            exports_1("Burn", Burn);
        }
    }
});
//# sourceMappingURL=firespells.js.map