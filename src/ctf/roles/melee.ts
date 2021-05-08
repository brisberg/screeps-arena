import { Creep, getDistance } from "/game";

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
    .filter((i) => getDistance(i, mcreep.initialPos) < 10)
    .sort((a, b) => getDistance(a, mcreep) - getDistance(b, mcreep));

  if (targets.length > 0) {
    mcreep.moveTo(targets[0]);
    mcreep.attack(targets[0]);
  } else {
    mcreep.moveTo(mcreep.initialPos);
  }
}
