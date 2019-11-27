<template>
	<div
		class="sprite"
		:style="{
			left: `${Math.round(pos.x)}px`,
			top: `${Math.round(pos.y)}px`,
			backgroundPosition: backgroundPosition,
			width: `${size * 16}px`,
		}"
	></div>
</template>
<script lang="ts">
	import Vue from "vue";
	import {
		createComponent,
		computed,
		onMounted,
		reactive,
	} from "@vue/composition-api";
	export default createComponent({
		props: {
			x: {
				type: Number,
				required: true,
			},
			y: {
				type: Number,
				required: true,
			},
			backgroundPosition: {
				type: String,
				required: true,
			},
			speed: {
				type: Number,
				required: true,
			},
			size: {
				type: Number,
				required: true,
			},
		},
		setup(props) {
			const pos = reactive({
				x: props.x,
				y: props.y,
			});
			onMounted(() => {
				setInterval(() => {
					pos.x += 1 * props.speed;
					if (pos.x >= 224) {
						pos.x -= 224 + (16 * props.size);
					} else if (pos.x < -(16 * props.size)) {
						pos.x += 224 + (16 * props.size);
					}
				}, 10);
			});
			return { pos };
		},
	});
</script>
<style lang="scss" scoped>
	.sprite {
		background-image: url(../assets/sprites.png);
		height: 16px;
		position: absolute;
	}
</style>
