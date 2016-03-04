System.register(['../magic/magic'], function(exports_1) {
    "use strict";
    var magic_1;
    var WaterMage;
    return {
        setters:[
            function (magic_1_1) {
                magic_1 = magic_1_1;
            }],
        execute: function() {
            WaterMage = (function () {
                function WaterMage(name) {
                    this.name = name;
                    this.spells = [];
                    this.life = 1000;
                    this.spells.push(new magic_1.Drown(), new magic_1.CleanWounds());
                }
                WaterMage.prototype.castSpell = function (target) {
                    this.spells[1].cast(target);
                };
                WaterMage.prototype.takeDamage = function (dmg) {
                    this.life -= dmg;
                    console.log("I " + this.name + " have been hit, I have " + this.life + " left!");
                };
                return WaterMage;
            }());
            exports_1("WaterMage", WaterMage);
        }
    }
});
//# sourceMappingURL=WaterMage.js.map