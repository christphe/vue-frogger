<template>
	<audio ref="audio" autoplay preload loop>
		<source src="../assets/snd/theme.mp3" type="audio/mpeg" />
	</audio>
</template>
<script lang="ts">
	import Vue from "vue";
	import { createComponent, Ref, ref, watch } from "@vue/composition-api";
	export default createComponent({
		props: {
			play: {
				type: Boolean,
				required: true,
			},
		},
		setup(props) {
			const audio: Ref<any> = ref(null);
			watch(() => {
				if (props.play) {
					audio.value.play();
				} else {
					audio.value.pause();
				}
			});
			return {
				audio,
			};
		},
	});
</script>
<style lang="scss" scoped></style>
