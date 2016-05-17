export class Spell {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    cast(target) {
        console.log(`${this.name} does ${this.damage} to ${target}`);
    }
}