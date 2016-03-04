System.register("app/magic/spell", [], function(exports_1) {
    "use strict";
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("app/magic/waterspells", [], function(exports_2) {
    "use strict";
    var Drown, CleanWounds;
    return {
        setters:[],
        execute: function() {
            Drown = (function () {
                function Drown() {
                    this.name = "Drown";
                    this.damage = 100;
                    this.cost = 10;
                }
                Drown.prototype.cast = function (target) {
                    target.takeDamage(this.damage);
                };
                return Drown;
            }());
            exports_2("Drown", Drown);
            CleanWounds = (function () {
                function CleanWounds() {
                    this.name = "Clean wounds";
                    this.damage = -100;
                    this.cost = 10;
                }
                CleanWounds.prototype.cast = function (target) {
                    target.takeDamage(this.damage);
                };
                return CleanWounds;
            }());
            exports_2("CleanWounds", CleanWounds);
        }
    }
});
System.register("app/magic/firespells", [], function(exports_3) {
    "use strict";
    var Burn;
    return {
        setters:[],
        execute: function() {
            Burn = (function () {
                function Burn() {
                    this.name = "Burn";
                    this.damage = 150;
                    this.cost = 10;
                }
                Burn.prototype.cast = function (target) {
                    target.takeDamage(this.damage);
                };
                return Burn;
            }());
            exports_3("Burn", Burn);
        }
    }
});
System.register("app/magic/magic", ["app/magic/waterspells", "app/magic/firespells"], function(exports_4) {
    "use strict";
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
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
System.register("app/wizards/WaterMage", ["app/magic/magic"], function(exports_5) {
    "use strict";
    var magic_1;
    var WaterMage;
    return {
        setters:[
            function (magic_1_1) {
                magic_1 = magic_1_1;
            }],
        execute: function() {
            WaterMage = (function () {
                function WaterMage(name) {
                    this.name = name;
                    this.spells = [];
                    this.life = 1000;
                    this.spells.push(new magic_1.Drown(), new magic_1.CleanWounds());
                }
                WaterMage.prototype.castSpell = function (target) {
                    this.spells[1].cast(target);
                };
                WaterMage.prototype.takeDamage = function (dmg) {
                    this.life -= dmg;
                    console.log("I " + this.name + " have been hit, I have " + this.life + " left!");
                };
                return WaterMage;
            }());
            exports_5("WaterMage", WaterMage);
        }
    }
});
System.register("app/wizards/wizard", ["app/wizards/WaterMage"], function(exports_6) {
    "use strict";
    function exportStar_2(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_6(exports);
    }
    return {
        setters:[
            function (WaterMage_1_1) {
                exportStar_2(WaterMage_1_1);
            }],
        execute: function() {
        }
    }
});
System.register("app/Application", ["app/wizards/wizard"], function(exports_7) {
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
            exports_7("Application", Application);
        }
    }
});
console.log("Fire magic");
System.register("main", ["app/Application", './app/wizards/FireMage'], function(exports_8) {
    "use strict";
    var Application_1;
    return {
        setters:[
            function (Application_1_1) {
                Application_1 = Application_1_1;
            },
            function (_1) {}],
        execute: function() {
            new Application_1.Application("Magic!12321");
        }
    }
});
//# sourceMappingURL=main2.js.map