System.register([], function(exports_1) {
    "use strict";
    var Drown, CleanWounds;
    return {
        setters:[],
        execute: function() {
            Drown = (function () {
                function Drown() {
                    this.name = "Drown";
                    this.damage = 100;
                    this.cost = 10;
                }
                Drown.prototype.cast = function (target) {
                    target.takeDamage(this.damage);
                };
                return Drown;
            }());
            exports_1("Drown", Drown);
            CleanWounds = (function () {
                function CleanWounds() {
                    this.name = "Clean wounds";
                    this.damage = -100;
                    this.cost = 10;
                }
                CleanWounds.prototype.cast = function (target) {
                    target.takeDamage(this.damage);
                };
                return CleanWounds;
            }());
            exports_1("CleanWounds", CleanWounds);
        }
    }
});
//# sourceMappingURL=waterspells.js.map