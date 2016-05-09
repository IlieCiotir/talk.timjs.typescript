System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Wizard;
    return {
        setters:[],
        execute: function() {
            Wizard = (function () {
                function Wizard() {
                    this.life = 100;
                    this.name = "";
                    this.spells = [];
                }
                Wizard.prototype.castSpellOn = function (target) {
                    this.spells[Math.round(Math.random() * 10) % this.spells.length].cast(target);
                };
                Wizard.prototype.applyDamage = function (damage) {
                    console.log(this.life);
                    this.life -= damage;
                    console.log("I'm not done I still have " + this.life + " life left");
                };
                return Wizard;
            }());
            exports_1("Wizard", Wizard);
        }
    }
});
//# sourceMappingURL=wizard.js.map