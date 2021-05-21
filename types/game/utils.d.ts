import { DirectionConstant } from "./constants";
import { Position, RoomObject } from "./prototypes";
import { Structure } from "./prototypes/structure";

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
export function getRange(a: Position, b: Position): number;

/**
 * Get an integer representation of the terrain at the given position.
 * pos should be an object containing x and y properties.
 * Returns TERRAIN_MASK_WALL, TERRAIN_MASK_SWAMP, or 0.
 */
export function getTerrainAt(pos: Position): number;

/** Find all positions from the given positions array within the specified linear range. */
export function findInRange(
  fromPos: Position,
  positions: Position[],
  range: number
): Position[];

/** Find a position with the shortest linear distance from the given position, or null otherwise. */
export function findClosestByRange(
  fromPos: Position,
  positions: Position[]
): Position | null;

/** Find a position with the shortest path from the given position, or null otherwise. */
export function findClosestByPath(
  fromPos: Position,
  positions: Position[],
  opts: any
): Position | null;

/**
 * Create a new construction site at the specified location. Returns the
 * ConstructionSite object instance. You can create maximum 10 active
 * construction sites.
 */
export function createConstructionSite(
  x: number,
  y: number,
  structurePrototype: typeof Structure
): number;
