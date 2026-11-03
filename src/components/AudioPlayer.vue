<template>
	<audio ref="audio" autoplay preload="auto" loop>
		<source src="../assets/snd/theme.mp3" type="audio/mpeg" />
	</audio>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import {  Ref, ref, watchEffect } from "vue";
	export default defineComponent({
		props: {
			play: {
				type: Boolean,
				required: true,
			},
		},
		setup(props) {
			const audio: Ref<any> = ref(null);
			watchEffect(() => {
				if (props.play) {
					audio.value?.play().catch(() => {});
				} else {
					audio.value?.pause();
				}
			});
			return {
				audio,
			};
		},
	});
</script>
<style lang="scss" scoped></style>
