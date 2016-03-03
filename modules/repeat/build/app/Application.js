System.register(['./wizards/WaterMage'], function(exports_1) {
    "use strict";
    var WaterMage_1;
    var Application;
    return {
        setters:[
            function (WaterMage_1_1) {
                WaterMage_1 = WaterMage_1_1;
            }],
        execute: function() {
            Application = (function () {
                function Application(info) {
                    console.log(info);
                    var archibald = new WaterMage_1.WaterMage("Archibald", 1000);
                    var neberug = new WaterMage_1.WaterMage("Neberug", 1000);
                    archibald.castSpellOn(neberug);
                    neberug.castSpellOn(archibald);
                }
                return Application;
            }());
            exports_1("Application", Application);
        }
    }
});
