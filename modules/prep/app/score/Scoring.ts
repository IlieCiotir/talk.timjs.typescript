export interface ScoreTable {
  [name: string]: number
}
export class Scoring {
  constructor(private scoreTable: ScoreTable) {  }

  public addPoint(playerName: string, points?: number) {
    if(this.scoreTable[playerName]) {
      this.scoreTable[playerName] += points ? points : 1;
    } else {
      this.scoreTable[playerName] = points ? points : 1;
    }
  }

  get ScoreTable(): ScoreTable {
    return this.scoreTable;
  }
}
