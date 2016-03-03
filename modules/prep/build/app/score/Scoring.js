System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Scoring;
    return {
        setters:[],
        execute: function() {
            Scoring = (function () {
                function Scoring(scoreTable) {
                    this.scoreTable = scoreTable;
                }
                Scoring.prototype.addPoint = function (playerName, points) {
                    if (this.scoreTable[playerName]) {
                        this.scoreTable[playerName] += points ? points : 1;
                    }
                    else {
                        this.scoreTable[playerName] = points ? points : 1;
                    }
                };
                Object.defineProperty(Scoring.prototype, "ScoreTable", {
                    get: function () {
                        return this.scoreTable;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Scoring;
            }());
            exports_1("Scoring", Scoring);
        }
    }
});
//# sourceMappingURL=Scoring.js.map