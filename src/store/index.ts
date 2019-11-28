import Vue from "vue";
import Vuex from "vuex";
import { Sprite } from "@/shared/Sprite";
import { vec } from "@/shared/Vector";

Vue.use(Vuex);

export interface State {
	cars: Sprite[];
	frog?: Sprite;
}

export default new Vuex.Store<State>({
	state: {
		cars: [],
	},
	mutations: {},
	actions: {},
	modules: {},
});
