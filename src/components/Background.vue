<template>
	<div id="background"></div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
		setup() {},
	});
</script>
<style lang="scss" scoped>
	#background {
		background-image: url('../assets/background.png');
		background-size: 100%;
		width: 100%;
		height: 100%;
	}
</style>
