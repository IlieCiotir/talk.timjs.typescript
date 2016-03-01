System.register(['./app/Application'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Application_1;
    return {
        setters:[
            function (Application_1_1) {
                Application_1 = Application_1_1;
            }],
        execute: function() {
            new Application_1.Application("My app", document.querySelector('body'));
        }
    }
});
//# sourceMappingURL=main.js.map