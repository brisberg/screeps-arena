import { RoomObject } from "./room-object";

export class Creep extends RoomObject {
  /** An array describing the creep’s body. */
  body: BodySegment[];

  /** The current amount of hit points of the creep. */
  hits: number;

  /** The maximum amount of hit points of the creep. */
  hitsMax: number;

  /** Whether it is your creep. */
  my: boolean;

  /** Fatigue indicator of the creep. It can move only when fatigue equals to 0. */
  fatigue: number;

  /**
   * Attack another creep or structure in a short-ranged attack.
   * Requires the ATTACK body part. The target has to be at an adjacent square
   * to the creep.
   */
  attack(target: Creep /** | Structure */): number;

  /**
   * Heal self or another creep. It will restore the target creep’s damaged
   * body parts function and increase the hits counter.
   * Requires the HEAL body part. The target has to be at an adjacent square to the creep.
   */
  heal(target: Creep): number;

  /**
 * Move the creep one square in the specified direction. direction must be one of the following constants:
    TOP
    TOP_RIGHT
    RIGHT
    BOTTOM_RIGHT
    BOTTOM
    BOTTOM_LEFT
    LEFT
    TOP_LEFT
 */
  move(direction: number): number;

  /**
   * Find the optimal path to the target within the same room and move to it.
   * A shorthand to consequent calls of findPathTo() and move() methods.
   * target can be any object containing x and y properties. opts is an optional
   * object containing additional options.
   * See /game/utils::findPath for details.
   */
  moveTo(target: RoomObject, opts?: {}): number;

  /**
   * A ranged attack against another creep or structure.
   * Requires the RANGED_ATTACK body part.
   * The target has to be within 3 squares range of the creep.
   */
  rangedAttack(target: Creep): number;

  /**
   * Heal another creep at a distance. It will restore the target creep’s damaged
   * body parts function and increase the hits counter. Requires the HEAL body
   * part. The target has to be within 3 squares range of the creep.
   */
  rangedHeal(target: Creep): number;

  /**
   * A ranged attack against all hostile creeps or structures within 3 squares range.
   * Requires the RANGED_ATTACK body part. The attack power depends on the range of
   * each target. Friendly units are not affected.
   */
  rangedMassAttack(): number;
}

export interface BodySegment {
  /** One of the body part types constants */
  type: string;
  /** The remaining amount of hit points of this body part */
  hits: number;
}
