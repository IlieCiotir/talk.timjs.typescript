System.register(['./wizard', '../magic/magic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var wizard_1, magic_1;
    var WaterMage;
    return {
        setters:[
            function (wizard_1_1) {
                wizard_1 = wizard_1_1;
            },
            function (magic_1_1) {
                magic_1 = magic_1_1;
            }],
        execute: function() {
            WaterMage = (function (_super) {
                __extends(WaterMage, _super);
                function WaterMage(name) {
                    _super.call(this);
                    this.name = name;
                    this.spells = [new magic_1.CleanWounds(), new magic_1.Drawn()];
                }
                return WaterMage;
            }(wizard_1.Wizard));
            exports_1("WaterMage", WaterMage);
        }
    }
});
//# sourceMappingURL=waterMage.js.map