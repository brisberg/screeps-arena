import { RoomObject } from "./room-object";

export class Wall extends RoomObject {
  /** The current amount of hit points of the wall. */
  hits: number;
  /** The maximum amount of hit points of the wall. */
  hitsMax: number;
}
