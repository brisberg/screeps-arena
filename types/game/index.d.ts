import { RoomObject } from "./prototypes";

export function getDistance(start: RoomObject, end: RoomObject): number;
export function getDirection(deltaX: number, deltaY: number): number;
export const ATTACK: string;

type Class<T> = new (...args: any[]) => T;

export function getObjectsByPrototype<T>(proto: Class<T>): T[];
export function getTime();
export const HEAL: string;
export const RANGED_ATTACK: string;
