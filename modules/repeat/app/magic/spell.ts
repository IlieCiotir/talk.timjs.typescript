export interface Spell {
  name: string,
  cost: number,
  damage: number,
  cast(target: Target): void
}

export interface Target {
  attack(damage: number): void
}
