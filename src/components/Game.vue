<template>
	<div
		class="game"
		ref="gameDiv"
		@keydown.up="handleLock(onUp)"
		@keydown.down="handleLock(onDown)"
		@keydown.right="handleLock(onRight)"
		@keydown.left="handleLock(onLeft)"
		@keypress.space="playAudio = !playAudio"
		tabindex="1"
	>
		<div id="screen" v-if="started">
			<background />
			<audio-player :play="started && playAudio" />
			<frog :x="frog.pos.x" :y="frog.pos.y" />
			<car
				v-for="car in cars"
				:key="car.id"
				:x="car.pos.x"
				:y="car.pos.y"
				:backgroundPosition="
					`-${car.backgroundPosition.x}px -${car.backgroundPosition.y}px`
				"
				:speed="car.speed.x"
				:size="car.size.x"
			/>
		</div>
		<div id="button-screen" v-if="!started">
			<button
				@click="
					started = true;
					gameDiv.focus();
				"
			>
				Start
			</button>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import {
		createComponent,
		reactive,
		ref,
		onMounted,
		Ref,
		computed,
	} from '@vue/composition-api';
	import Background from './Background.vue';
	import Frog from './Frog.vue';
	import AudioPlayer from './AudioPlayer.vue';
	import Car from './Car.vue';
	import { initGame } from './InitGame';

	export default createComponent({
		components: {
			Background,
			Frog,
			AudioPlayer,
			Car,
		},
		setup(props, { root }) {
			const started = ref(false);
			const playAudio = ref(true);
			const gameDiv: Ref<any> = ref(null);
			onMounted(() => {
				initGame(root.$store);
				gameDiv.value.focus();
			});
			let keylock = false;
			function handleLock(callback: () => void): void {
				if (keylock) {
					return;
				}
				keylock = true;
				callback();
				setTimeout(() => {
					keylock = false;
				}, 100);
			}
			function onUp() {
				frog.value.pos.y -= 16;
			}
			function onDown() {
				frog.value.pos.y += 16;
			}
			function onRight() {
				frog.value.pos.x += 16;
			}
			function onLeft() {
				frog.value.pos.x -= 16;
			}
			const cars = computed(() => {
				return root.$store.state.cars;
			});
			const frog = computed(() => {
				return root.$store.state.frog;
			});
			return {
				cars,
				frog,
				onUp,
				onDown,
				onRight,
				onLeft,
				handleLock,
				gameDiv,
				started,
				playAudio,
			};
		},
	});
</script>

<style lang="scss" scoped>
	#game {
		width: 100%;
		height: 100%;
	}
	#screen,
	#button-screen {
		position: relative;
		top: 0;
		left: 0;
		width: 224px;
		height: 256px;
		margin-left: auto;
		margin-right: auto;
		transform: scale(1);
	}
	#button-screen {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
