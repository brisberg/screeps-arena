export class RoomObject {
  /** Returns true if this object is live in the game at the moment.
   * Check this property to verify cached or newly created object instances.
   */
  exists: boolean;
  /** The X coordinate in the room. */
  x: number;
  /** The Y coordinate in the room. */
  y: number;

  /**
   * Returns the path from this object to another position.
   * pos can be any object containing x and y properties.
   * See /game/utils::findPath for details.
   */
  findPathTo(pos: RoomObject, opts: {}): string[];
}
