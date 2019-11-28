import { Store } from 'vuex';
import { State } from '@/store';
import { vec } from '@/shared/Vector';

export function initGame($store: Store<State>) {
	$store.state.frog = {
		id: 'frog',
		pos: vec(112, 224),
		size: vec(1, 1),
		backgroundPosition: vec(16, 16),
		speed: vec(0, 0),
	};
	function addCars() {
		for (let i = 0; i < 3; i++) {
			$store.state.cars.push({
				id: `lorry-${i}`,
				pos: vec(-16 + i * 16 * 5, 144),
				size: vec(2, 1),
				backgroundPosition: vec(64, 335),
				speed: vec(-0.2, 0),
			});
			$store.state.cars.push({
				id: `fast-${i}`,
				pos: vec(-16 + i * 16 * 5, 160),
				size: vec(1, 1),
				backgroundPosition: vec(128, 335),
				speed: vec(0.7, 0),
			});
			$store.state.cars.push({
				id: `normal-${i}`,
				pos: vec(-16 + i * 16 * 5, 176),
				size: vec(1, 1),
				backgroundPosition: vec(104, 335),
				speed: vec(-0.5, 0),
			});
		}
		// <car
		//     v-for="(index, i) in 3"
		//     :key="'normal' + index"
		//     :x="-16 + i * 16 * 5"
		//     :y="176"
		//     backgroundPosition="-104px -335px"
		//     :speed="-0.5"
		//     :size="1"
		// />
		// <car
		//     v-for="(index, i) in 3"
		//     :key="'dozer' + index"
		//     :x="-16 + i * 16 * 5"
		//     :y="192"
		//     backgroundPosition="-40px -335px"
		//     :speed="0.2"
		//     :size="1"
		// />
		// <car
		//     v-for="(index, i) in 3"
		//     :key="'slow' + index"
		//     :x="-16 + i * 16 * 5"
		//     :y="208"
		//     backgroundPosition="-16px -335px"
		//     :speed="-0.3"
		//     :size="1"
		// />
	}
}
