<template>
	<div
		class="frog"
		:style="{
			left: `${pos.x}px`,
			top: `${pos.y}px`,
			'background-position-x': `-${backgroundPosition.x}px`,
			'background-position-y': `-${backgroundPosition.y}px`,
		}"
	/>
</template>
<script lang="ts">
	import Vue from "vue";
	import {
		createComponent,
		reactive,
		ref,
		computed,
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
		},
		setup(props) {
			const pos = computed(() => ({
				x: props.x,
				y: props.y,
			}));
			const backgroundPosition = reactive({
				x: 16,
				y: 16,
			});
			return {
				pos,
				backgroundPosition,
			};
		},
	});
</script>
<style lang="scss" scoped>
	.frog {
		background-image: url(../assets/sprites.png);
		width: 16px;
		height: 16px;
		position: absolute;
	}
</style>
