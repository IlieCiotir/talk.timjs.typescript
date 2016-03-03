System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var privateVariable, a;
    function doMagic() {
        // magic
    }
    function castSpell(mana) {
        if (mana) {
            doMagic();
        }
    }
    exports_1("castSpell", castSpell);
    return {
        setters:[],
        execute: function() {
            privateVariable = "I'm invisible";
            exports_1("a", a = 5);
        }
    }
});
//# sourceMappingURL=Wizard.js.map