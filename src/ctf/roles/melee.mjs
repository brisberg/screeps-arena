import {getDistance} from '/game';

export function meleeAttacker(creep, enemyCreeps) {
    // Here is the alternative to the creep "memory" from Screeps World. All game objects are persistent. You can assign any property to it once, and it will be available during the entire match.
    if(!creep.initialPos) {
        creep.initialPos = {x: creep.x, y: creep.y};
    }

    const targets = enemyCreeps.filter(i => getDistance(i, creep.initialPos) < 10)
		.sort((a,b) => getDistance(a, creep) - getDistance(b, creep));

    if(targets.length > 0) {
        creep.moveTo(targets[0]);
        creep.attack(targets[0]);
    }
    else {
        creep.moveTo(creep.initialPos);
    }
}