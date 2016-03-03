System.register(['./fire', './water'], function(exports_1) {
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
            function (fire_1_1) {
                exportStar_1(fire_1_1);
            },
            function (water_1_1) {
                exportStar_1(water_1_1);
            }],
        execute: function() {
        }
    }
});
