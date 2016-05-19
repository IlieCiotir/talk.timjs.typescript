import {CenterElement as Bad, DeclareGlobalVariable as AlsoBad, a} from './spells/index'

export class Application {
    constructor(message) {
        console.log(message);
        new AlsoBad().cast("page");
        a();

    }
}
import './experience/lint';