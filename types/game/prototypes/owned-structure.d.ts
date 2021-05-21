import { Structure } from "./structure";

export class OwnedStructure extends Structure {
  /**
   * Returns true for your strucutre, false for a hostile strucutre, undefined
   * for a neutral strucutre.
   */
  my: boolean;
}
