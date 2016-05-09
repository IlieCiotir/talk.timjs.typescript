export class Wizard {

    constructor() {
        this.life = 100;
        this.name = "";
        this.spells = [];
        
    }

    castSpellOn(target) {
        this.spells[Math.round(Math.random() * 10) % this.spells.length].cast(target);
    }

    applyDamage(damage) {
        console.log(this.life);
        this.life -= damage;
        console.log(`I'm not done I still have ${this.life} life left`);
    }
}

