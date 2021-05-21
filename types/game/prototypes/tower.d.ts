import { Creep } from "./creep";
import { OwnedStructure } from "./owned-structure";
import { Store } from "./store";

export class Tower extends OwnedStructure {
  /** An object that contains a cargo of this structure. Towers can contain only energy. */
  store: Store;

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
