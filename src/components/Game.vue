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
		</div>
		<div id="button-screen" v-if="!started">
			<button @click="started = true; gameDiv.focus()">Start</button>
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

	export default createComponent({
		components: {
			Background,
			Frog,
			AudioPlayer,
		},
		setup() {
			const started = ref(false);
			const playAudio = ref(true);
			const gameDiv: Ref<any> = ref(null);
			onMounted(() => {
				gameDiv.value.focus();
			})
			let keylock = false;
			const frogPos = reactive({
				x: 104,
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
