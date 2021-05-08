import { RoomObject } from "../../game/prototypes";

export class Flag extends RoomObject {
  /** Equals to true or false if the flag is owned. Returns undefined if it is neutral. */
  my: boolean;
}
