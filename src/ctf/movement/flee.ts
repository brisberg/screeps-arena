import { Creep, getDirection, Position } from "/game";
import { searchPath } from "/game/path-finder";

export function flee(creep: Creep, targets: Position[], range: number) {
  let result = searchPath(
    creep,
    targets.map((i) => ({ pos: i, range })),
    { flee: true }
  );
  if (result.path.length > 0) {
    let direction = getDirection(
      result.path[0].x - creep.x,
      result.path[0].y - creep.y
    );
    creep.move(direction);
  }
}
