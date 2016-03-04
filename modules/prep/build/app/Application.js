System.register(['./game/Game', './score/Scoring'], function(exports_1) {
    "use strict";
    var Game_1, Scoring_1;
    var Application;
    return {
        setters:[
            function (Game_1_1) {
                Game_1 = Game_1_1;
            },
            function (Scoring_1_1) {
                Scoring_1 = Scoring_1_1;
            }],
        execute: function() {
            Application = (function () {
                function Application(name, element) {
                    var _this = this;
                    this.scoring = new Scoring_1.Scoring({ 'Ion': 0 });
                    var questions = [
                        "1",
                        "100",
                        "131",
                        "7",
                        "512"
                    ];
                    new Game_1.Game({
                        questions: questions,
                        checkAnswer: function (answer) { return _this.checkAnswer(answer); },
                        right: "That's NumberWang!"
                    }).start();
                    alert(JSON.stringify(this.scoring));
                }
                Application.prototype.checkAnswer = function (answer) {
                    try {
                        var n = parseInt(answer, 10);
                        if ((n % 132) / 100 <= 0.5) {
                            this.scoring.addPoint('Ion');
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    catch (e) {
                        return false;
                    }
                };
                return Application;
            }());
            exports_1("Application", Application);
        }
    }
});
//# sourceMappingURL=Application.js.map