import { Position } from "./prototypes";

export interface PathSegment {
  x: number;
  y: number;
}

export interface SearchResult {
  path: PathSegment[];
  opts: number;
  cost: number;
  incomplete: boolean;
}

export interface SearchOptions {
  flee?: boolean;
}

export interface SearchGoal {
  pos: Position;
  range: number;
}

export function searchPath(
  origin: Position,
  goals: SearchGoal[],
  opts?: SearchOptions
): SearchResult;

export class CostMatrix {
  /**
   * Creates a new CostMatrix containing 0's for all positions.
   * searchPath use terrain cost for positions with 0 cost
   */
  constructor();

  /** Copy this CostMatrix into a new CostMatrix with the same data. */
  clone(): CostMatrix;

  /** Set the cost of a position in this CostMatrix. */
  set(x: number, y: number, cost: number): void;

  /** Get the cost of a position in this CostMatrix. */
  get(x: number, y: number): number;
}
