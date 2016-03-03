System.register(["./app/terrain/terrain", './app/Application'], function(exports_1) {
    "use strict";
    var Application_1;
    return {
        setters:[
            function (_1) {},
            function (Application_1_1) {
                Application_1 = Application_1_1;
            }],
        execute: function() {
            new Application_1.Application("Magic");
        }
    }
});
