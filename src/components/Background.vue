<template>
  <div id="background"></div>
</template>
<script lang="ts">
import Vue from "vue";
import { createComponent } from "@vue/composition-api";
export default createComponent({
  setup() {}
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
