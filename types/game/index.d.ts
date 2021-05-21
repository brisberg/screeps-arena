export * as constants from "./constants";
export * as pathFinder from "./path-finder";
export * as prototypes from "./prototypes";
export * as utils from "./utils";

export interface ArenaInfo {
  /** The name of the arena. */
  name: string;

  /** Currently equals to 1 for basic arena and 2 for advanced. */
  level: number;

  /** Currently equals to "alpha". */
  season: string;
}

export const arenaInfo: ArenaInfo;
