import Vue from 'vue';
import Vuex from 'vuex';
import { Sprite } from '@/shared/Sprite';
import { vec, Vector } from '@/shared/Vector';

Vue.use(Vuex);

export interface State {
	cars: Sprite[];
	frog?: Sprite;
}

export default new Vuex.Store<State>({
	state: {
		cars: [],
	},
	mutations: {
		updateCarPosition(state: State, payload: { id: string, pos: Vector }) {
			const car = state.cars.find(car => car.id === payload.id);
			if (car) {
				car.pos = payload.pos;
			}
		},
		updateFrogPosition(state: State, payload: { pos: Vector }) {
			if (state.frog) {
				state.frog.pos = payload.pos;
			}
		},
	},
	actions: {},
	modules: {},
});
