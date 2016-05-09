export class Spell {
    constructor() {
        this.name = "";
        this.damage = 0;
    }

    cast(target) {
        console.log(`${this.name} hits ${target.name} for ${this.damage}`);
        target.applyDamage(this.damage);
    }
}