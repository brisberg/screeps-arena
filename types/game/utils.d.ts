import { DirectionConstant } from ".";
import { RoomObject } from "./prototypes";

/** Get count of game ticks passed since the start of the game */
export function getTime(): number;

/** Get an object with the specified unique ID. */
export function getObjectById(id: string): RoomObject;

/** Get all objects in the game. */
export function getObjects(): RoomObject[];

type Class<T> = new (...args: any[]) => T;

/** Get all objects in the game with the specified prototype, for example, all creeps */
export function getObjectsByPrototype<T>(prototype: Class<T>): T[];

/** Use this method to get heap statistics for your virtual machine */
export function getHeapStatistics(): any;

/** Get linear direction by differences of x and y */
export function getDirection(dx: number, dy: number): DirectionConstant;

/**
 * Find an optimal path between fromPos and toPos. Unlike searchPath,
 *  findPath avoid all obstacles by default (unless costMatrix is specified).
 *  opts object containing additional options:
 *
 *  - ignore: array (objects which should be treated as obstacles during the search)
 *  - Any options supported by searchPath method
 *
 * TODO: Actually type the result
 */
export function findPath(
  fromPos: Position,
  toPos: Position,
  opts?: any
): number[];

/** Get linear range between two objects. a and b may be any object containing x and y properties. */
export function getDistance(a: Position, b: Position): number;

/**
 * Get an integer representation of the terrain at the given position.
 * pos should be an object containing x and y properties.
 * Returns TERRAIN_MASK_WALL, TERRAIN_MASK_SWAMP, or 0.
 */
export function getTerrainAt(pos: Position): number;

interface Position {
  x: number;
  y: number;
}
