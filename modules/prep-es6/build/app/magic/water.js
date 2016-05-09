System.register(['./spell'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var spell_1;
    var Drawn, CleanWounds;
    return {
        setters:[
            function (spell_1_1) {
                spell_1 = spell_1_1;
            }],
        execute: function() {
            Drawn = (function (_super) {
                __extends(Drawn, _super);
                function Drawn() {
                    this.name = "Drawn";
                    this.damage = 100;
                }
                return Drawn;
            }(spell_1.Spell));
            exports_1("Drawn", Drawn);
            CleanWounds = (function () {
                function CleanWounds() {
                    this.name = "Clean Wounds";
                    this.damage = 100;
                }
                return CleanWounds;
            }());
            exports_1("CleanWounds", CleanWounds);
        }
    }
});
//# sourceMappingURL=water.js.map