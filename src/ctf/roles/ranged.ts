import { getDistance } from "/game";
import { flee } from "../movement/flee";

export function rangedAttacker(creep, enemyCreeps, enemyFlag) {
  const targets = enemyCreeps
    .filter((i) => true)
    .sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

  if (targets.length > 0) {
    creep.rangedAttack(targets[0]);
  }

  creep.moveTo(enemyFlag);

  const range = 3;
  const enemiesInRange = enemyCreeps.filter(
    (i) => getDistance(i, creep) < range
  );
  if (enemiesInRange.length > 0) {
    flee(creep, enemiesInRange, range);
  }
}
