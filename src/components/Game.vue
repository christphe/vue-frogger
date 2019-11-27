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
			<frog :x="frogPos.x" :y="frogPos.y" />
			<car
				v-for="(index, i) in 3"
				:key="'lorry' + index"
				:x="-16 + i * 16 * 5"
				:y="144"
				backgroundPosition="-64px -335px"
				:speed="-0.2"
				:size="2"
			/>
			<car
				v-for="(index, i) in 3"
				:key="'fast' + index"
				:x="-16 + i * 16 * 5"
				:y="160"
				backgroundPosition="-128px -335px"
				:speed="0.7"
				:size="1"
			/>
			<car
				v-for="(index, i) in 3"
				:key="'normal' + index"
				:x="-16 + i * 16 * 5"
				:y="176"
				backgroundPosition="-104px -335px"
				:speed="-0.5"
				:size="1"
			/>
			<car
				v-for="(index, i) in 3"
				:key="'dozer' + index"
				:x="-16 + i * 16 * 5"
				:y="192"
				backgroundPosition="-40px -335px"
				:speed="0.2"
				:size="1"
			/>
			<car
				v-for="(index, i) in 3"
				:key="'slow' + index"
				:x="-16 + i * 16 * 5"
				:y="208"
				backgroundPosition="-16px -335px"
				:speed="-0.3"
				:size="1"
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
	import Vue from "vue";
	import {
		createComponent,
		reactive,
		ref,
		onMounted,
		Ref,
	} from "@vue/composition-api";
	import Background from "./Background.vue";
	import Frog from "./Frog.vue";
	import AudioPlayer from "./AudioPlayer.vue";
	import Car from "./Car.vue";

	export default createComponent({
		components: {
			Background,
			Frog,
			AudioPlayer,
			Car,
		},
		setup() {
			const started = ref(false);
			const playAudio = ref(true);
			const gameDiv: Ref<any> = ref(null);
			onMounted(() => {
				gameDiv.value.focus();
			});
			let keylock = false;
			const frogPos = reactive({
				x: 112,
				y: 224,
			});
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
				frogPos.y -= 16;
			}
			function onDown() {
				frogPos.y += 16;
			}
			function onRight() {
				frogPos.x += 16;
			}
			function onLeft() {
				frogPos.x -= 16;
			}
			return {
				frogPos,
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
