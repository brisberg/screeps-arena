import { RoomObject } from "../../game/prototypes";

export class BodyPart extends RoomObject {
  /** Returns the type of the body part. */
  types: string;
  /** Returns the number of ticks until this item disappears. */
  ticksToDecay: number;
}
