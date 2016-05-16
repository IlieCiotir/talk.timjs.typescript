export class Spell {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    cast(target) {
        target.applyDamage(this.damage);
    }
}
