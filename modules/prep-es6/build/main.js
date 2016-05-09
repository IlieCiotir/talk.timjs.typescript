System.register(['./app/application'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var application_1;
    return {
        setters:[
            function (application_1_1) {
                application_1 = application_1_1;
            }],
        execute: function() {
            console.log("starting up!");
            new application_1.Application();
        }
    }
});
//# sourceMappingURL=main.js.map