// This stuff is arena-specific
import { Flag } from "/arena";
// Everything can be imported either from the root /game module or corresponding
// submodules
import { ATTACK, HEAL, RANGED_ATTACK } from "/game/constants";
import { Creep } from "/game/prototypes";
import { getObjectsByPrototype, getTime } from "/game/utils";

// You can also import your files like this:
import { healer } from "./roles/healer";
import { meleeAttacker } from "./roles/melee";
import { rangedAttacker } from "./roles/ranged";

// We can define global objects that will be valid for the entire match.
// The game guarantees there will be no global reset during the match.
// Note that you cannot assign any game objects here, since they are populated
// on the first tick, not when the script is initialized.
let myCreeps: Creep[], enemyCreeps: Creep[], enemyFlag: Flag;

// This is the only exported function from the main module. It is called every
// tick.
export function loop() {
  if (getTime() === 1) {
    // We assign global variables here. They will be accessible throughout the
    // tick, and even on the following ticks too. getObjectsByPrototype function
    // is the alternative to Room.find from Screeps World. There is no
    // Game.creeps or Game.structures, you can manage game objects in your own
    // way.
    myCreeps = getObjectsByPrototype(Creep).filter((i) => i.my);
    enemyCreeps = getObjectsByPrototype(Creep).filter((i) => !i.my);
    enemyFlag = getObjectsByPrototype(Flag).find((i) => !i.my);
  }

  // Notice how getTime is a global function, but not Game.time anymore
  if (getTime() % 10 === 0) {
    console.log(`I have ${myCreeps.length} creeps`);
  }

  // Run all my creeps according to their bodies
  myCreeps.forEach((creep) => {
    if (creep.body.some((i) => i.type === ATTACK)) {
      meleeAttacker(creep, enemyCreeps);
    }
    if (creep.body.some((i) => i.type === RANGED_ATTACK)) {
      rangedAttacker(creep, enemyCreeps, enemyFlag);
    }
    if (creep.body.some((i) => i.type === HEAL)) {
      healer(creep, myCreeps, enemyCreeps, enemyFlag);
    }
  });
}
