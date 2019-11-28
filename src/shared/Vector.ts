export interface Vector {
	x: number;
	y: number;
}

export function vec(x: number, y: number): Vector {
	return { x, y };
}
