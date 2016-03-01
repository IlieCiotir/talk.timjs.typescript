export interface GameOptions {
    questions: string[],
    checkAnswer: (answer: string) => boolean,
    right?: string,
    wrong?: string
}

export class Game {
  private static DEFAULT_RIGHT_ANSWER= "Correct!";
  private static DEFAULT_WRONG_MESSAGE = "Wrong!";
  constructor(private options: GameOptions) {
  }

  start():void {
    this.options.questions.forEach((q) => {
      if(this.options.checkAnswer(prompt(q))) {
        alert(this.options.right ? this.options.right : Game.DEFAULT_RIGHT_ANSWER);
      } else {
        alert(this.options.wrong? this.options.wrong: Game.DEFAULT_WRONG_MESSAGE);
      }
    });
  }
}
