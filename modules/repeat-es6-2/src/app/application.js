import {CenterElement as Bad, DefineGlobalVariable as AlsoBad} from './spells/index';
import './experience/lint';

export class Application {
    constructor(message) {
        console.log(message);
        new Bad().cast("main page");
    }
}