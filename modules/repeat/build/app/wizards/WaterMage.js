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
                function WaterMage(name, life) {
                    this.name = name;
                    this.life = life;
                    this.spells = [];
                    this.spells.push(new magic_1.CleanWounds(), new magic_1.Drawn(), new magic_1.Drawn(), new magic_1.CleanWounds());
                }
                WaterMage.prototype.castSpellOn = function (target) {
                    this.spells[Math.round(Math.random() * 10) % this.spells.length].cast(target);
                };
                WaterMage.prototype.attack = function (dmg) {
                    this.life -= dmg;
                    console.log(this.name + " took " + dmg + " magic and has " + this.life + " left.");
                };
                return WaterMage;
            }());
            exports_1("WaterMage", WaterMage);
        }
    }
});
