System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Spell;
    return {
        setters:[],
        execute: function() {
            Spell = (function () {
                function Spell() {
                    this.name = "";
                    this.damage = 0;
                }
                Spell.prototype.cast = function (target) {
                    console.log(this.name + " hits " + target.name + " for " + this.damage);
                    target.applyDamage(this.damage);
                };
                return Spell;
            }());
            exports_1("Spell", Spell);
        }
    }
});
//# sourceMappingURL=spell.js.map