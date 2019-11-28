<template>
	<div
		class="frog"
		:style="{
			left: `${sprite.pos.x}px`,
			top: `${sprite.pos.y}px`,
			'background-position-x': `-${sprite.backgroundPosition.x}px`,
			'background-position-y': `-${sprite.backgroundPosition.y}px`,
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
			sprite: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
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
