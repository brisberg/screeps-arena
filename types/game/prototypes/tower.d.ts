import { Creep } from "./creep";
import { RoomObject } from "./room-object";

export class Tower extends RoomObject {
  /** The current amount of hit points of the tower. */
  hits: number;

  /** The maximum amount of hit points of the tower. */
  hitsMax: number;

  /**
   * Returns true for your tower, false for a hostile tower, undefined for
   * a neutral tower.
   */
  my: boolean;

  /** An object that contains a cargo of this structure. Towers can contain only energy. */
  store: object;

  /**
   * Remotely attack any creep or structure.
   * The target has to be within 50 squares range of the tower.
   */
  attack(target: Creep /** | Structure */): number;

  /**
   * Remotely heal any creep.
   * The target has to be within 50 squares range of thetower.
   * */
  heal(target: Creep): number;
}
