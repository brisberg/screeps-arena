import { Creep } from "./prototypes";

export interface PathSegment {
  x: number;
  y: number;
}

export interface SearchResult {
  path: PathSegment[];
}

export interface SearchOptions {
  flee?: boolean;
}

export function searchPath(
  creep: Creep,
  targets: Creep[],
  opts?: SearchOptions
): SearchResult;
