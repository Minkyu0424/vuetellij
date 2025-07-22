<template>
  <div style="display: none">hi</div>
</template>

<script setup>
import { onActivated, defineEmits } from "vue";
const emit = defineEmits(["activated"]);
onActivated(() => {
  emit("activated");
});
</script>
