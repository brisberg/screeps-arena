import { RoomObject } from "./room-object";

export class Structure extends RoomObject {
  /** The current amount of hit points of the structure. */
  hits: number;

  /** The maximum amount of hit points of the structure. */
  hitsMax: number;
}
