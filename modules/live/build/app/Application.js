System.register(['./wizards/wizard'], function(exports_1) {
    "use strict";
    var wizard_1;
    var Application;
    return {
        setters:[
            function (wizard_1_1) {
                wizard_1 = wizard_1_1;
            }],
        execute: function() {
            Application = (function () {
                function Application(magic) {
                    console.log(magic);
                    var archibald = new wizard_1.WaterMage("Archibald the Great!");
                    var trevor = new wizard_1.WaterMage("Magical Trevor.");
                    archibald.castSpell(trevor);
                    trevor.castSpell(archibald);
                }
                return Application;
            }());
            exports_1("Application", Application);
        }
    }
});
//# sourceMappingURL=Application.js.map