import {Game} from './game/Game';
import {ScoreTable, Scoring} from './score/Scoring';

export class Application {
  private scoring: Scoring = new Scoring({'Ion': 0});

  constructor(name: string, element: Element) {
    let questions = [
      "1",
      "100",
      "131",
      "7",
      "512"
    ];

    new Game({
      questions,
      checkAnswer: (answer) => this.checkAnswer(answer),
      right: "That's NumberWang!"
    }).start();

    alert(JSON.stringify(this.scoring));

  }

  private checkAnswer(answer: string) {
    try {
      let n = parseInt(answer, 10);
      if((n % 132) / 100 <= 0.5) {
        this.scoring.addPoint('Ion');
        return true;
      } else {
        return false;
      }
    } catch(e) {
        return false;
    }

  }
}
