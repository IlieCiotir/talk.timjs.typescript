System.register([], function(exports_1) {
    "use strict";
    var Drawn, CleanWounds;
    return {
        setters:[],
        execute: function() {
            Drawn = (function () {
                function Drawn() {
                    this.name = "Drawn";
                    this.cost = 10;
                    this.damage = 100;
                }
                Drawn.prototype.cast = function (target) {
                    target.attack(this.damage);
                };
                return Drawn;
            }());
            exports_1("Drawn", Drawn);
            CleanWounds = (function () {
                function CleanWounds() {
                    this.name = "Clean Wounds";
                    this.cost = 20;
                    this.damage = -100;
                }
                CleanWounds.prototype.cast = function (target) {
                    target.attack(this.damage);
                };
                return CleanWounds;
            }());
            exports_1("CleanWounds", CleanWounds);
        }
    }
});
