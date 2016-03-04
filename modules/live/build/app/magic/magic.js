System.register(['./waterspells', './firespells'], function(exports_1) {
    "use strict";
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (waterspells_1_1) {
                exportStar_1(waterspells_1_1);
            },
            function (firespells_1_1) {
                exportStar_1(firespells_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=magic.js.map