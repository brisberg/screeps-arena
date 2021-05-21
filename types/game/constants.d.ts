// Body Part Constants

export const MOVE = "move";
export const WORK = "work";
export const CARRY = "carry";
export const ATTACK = "attack";
export const RANGED_ATTACK = "ranged_attack";
export const TOUGH = "tough";
export const HEAL = "heal";
export const CLAIM = "claim";

export type BodyPartConstant =
  | typeof MOVE
  | typeof WORK
  | typeof CARRY
  | typeof ATTACK
  | typeof RANGED_ATTACK
  | typeof TOUGH
  | typeof HEAL
  | typeof CLAIM;

// Direction Constants

export const TOP = 1;
export const TOP_RIGHT = 2;
export const RIGHT = 3;
export const BOTTOM_RIGHT = 4;
export const BOTTOM = 5;
export const BOTTOM_LEFT = 6;
export const LEFT = 7;
export const TOP_LEFT = 8;

export type DirectionConstant =
  | typeof TOP
  | typeof TOP_RIGHT
  | typeof RIGHT
  | typeof BOTTOM_RIGHT
  | typeof BOTTOM
  | typeof BOTTOM_LEFT
  | typeof LEFT
  | typeof TOP_LEFT;

// Resource Constants

export const ENERGY = "energy";

export type ResourceConstant = typeof ENERGY;
