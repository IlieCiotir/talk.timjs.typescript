export class Wizard {
    constructor(name, spells) {
        this.name = name;
        this.life = 500;
        this.spells = spells;
    }

    cast(target) {
        let spell = this.spells[Math.round(Math.random() * 10) % this.spells.length];
        console.log(`${this.name} casts ${spell.name} on ${target.name}.`);
        spell.cast(target);

    }

    applyDamage(damage) {
        this.life -= damage;
        console.log(`${this.name}: I'm not done. I still have ${this.life}life left in me!`);
    }
}
