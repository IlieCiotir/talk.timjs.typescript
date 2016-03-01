System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Game;
    return {
        setters:[],
        execute: function() {
            Game = (function () {
                function Game(options) {
                    this.options = options;
                }
                Game.prototype.start = function () {
                    var _this = this;
                    this.options.questions.forEach(function (q) {
                        if (_this.options.checkAnswer(prompt(q))) {
                            alert(_this.options.right ? _this.options.right : Game.DEFAULT_RIGHT_ANSWER);
                        }
                        else {
                            alert(_this.options.wrong ? _this.options.wrong : Game.DEFAULT_WRONG_MESSAGE);
                        }
                    });
                };
                Game.DEFAULT_RIGHT_ANSWER = "Correct!";
                Game.DEFAULT_WRONG_MESSAGE = "Wrong!";
                return Game;
            }());
            exports_1("Game", Game);
        }
    }
});
//# sourceMappingURL=Game.js.map