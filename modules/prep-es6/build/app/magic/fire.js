System.register(['./spell'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Spell;
    var Burn;
    return {
        setters:[
            function (Spell_1) {
                Spell = Spell_1;
            }],
        execute: function() {
            Burn = (function (_super) {
                __extends(Burn, _super);
                function Burn() {
                    this.name = "Burn";
                    this.damage = 150;
                }
                return Burn;
            }(Spell.Spell));
            exports_1("Burn", Burn);
        }
    }
});
//# sourceMappingURL=fire.js.map