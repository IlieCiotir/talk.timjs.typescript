import {WaterMage} from './wizards/WaterMage';

export class Application {
  constructor(info) {
    console.log(info);

    let archibald = new WaterMage("Archibald", 1000);
    let neberug = new WaterMage("Neberug", 1000);

    archibald.castSpellOn(neberug);
    neberug.castSpellOn(archibald);
  }
}
