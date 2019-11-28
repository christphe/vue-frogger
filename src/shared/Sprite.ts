import { Vector } from "./Vector";

export interface Sprite {
    id: string;
	pos: Vector;
	size: Vector;
	backgroundPosition: Vector;
	speed: Vector;
}
