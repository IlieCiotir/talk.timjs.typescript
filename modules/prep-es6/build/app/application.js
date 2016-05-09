System.register(['./wizard/fireMage', './wizard/waterMage'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var fireMage_1, waterMage_1;
    var Application;
    return {
        setters:[
            function (fireMage_1_1) {
                fireMage_1 = fireMage_1_1;
            },
            function (waterMage_1_1) {
                waterMage_1 = waterMage_1_1;
            }],
        execute: function() {
            Application = (function () {
                function Application() {
                    var Baconnius = new waterMage_1.WaterMage("Baconnius Watershed");
                    var Horavio = new fireMage_1.FireMage("Horavio Flameboyant");
                    Baconnius.castSpellOn(Horavio);
                }
                return Application;
            }());
            exports_1("Application", Application);
        }
    }
});
//# sourceMappingURL=application.js.map