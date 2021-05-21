import { Creep } from "/game/prototypes";
import { getRange } from "/game/utils";

export function meleeAttacker(creep: Creep, enemyCreeps: Creep[]) {
  // TODO: Better way to type dynamic memory
  const mcreep = creep as Creep & { initialPos: { x: number; y: number } };
  // Here is the alternative to the creep "memory" from Screeps World.
  // All game objects are persistent. You can assign any property to it
  // once, and it will be available during the entire match.
  if (!mcreep.initialPos) {
    mcreep.initialPos = { x: mcreep.x, y: mcreep.y };
  }

  const targets = enemyCreeps
    .filter((i) => getRange(i, mcreep.initialPos) < 10)
    .sort((a, b) => getRange(a, mcreep) - getRange(b, mcreep));

  if (targets.length > 0) {
    mcreep.moveTo(targets[0]);
    mcreep.attack(targets[0]);
  } else {
    mcreep.moveTo(mcreep.initialPos);
  }
}
