<template>
  <div class="lifecycle-demo">
    <h2>Vue 라이프사이클 훅 구분 데모</h2>
    <ul>
      <li :class="{ active: beforeMount }">
        onBeforeMount: {{ beforeMount ? "✅" : "⏳" }}
      </li>
      <li :class="{ active: mounted }">
        onMounted: {{ mounted ? "✅" : "⏳" }}
      </li>
      <li :class="{ active: activated }">
        onActivated: {{ activated ? "✅" : "⏳" }}
      </li>
    </ul>

    <keep-alive>
      <ActivatedComponent v-if="show" @activated="onActivated" />
    </keep-alive>

    <div style="margin-top: 20px">
      <button @click="reset">리셋</button>
      <button @click="toggle">토글(KeepAlive)</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import ActivatedComponent from "@/components/lifecycle/ActivatedComponent.vue";

const beforeMount = ref(false);
const mounted = ref(false);
const activated = ref(false);
const show = ref(true);

onBeforeMount(() => {
  beforeMount.value = true;
});
onMounted(() => {
  mounted.value = true;
});

function onActivated() {
  activated.value = true;
}

function reset() {
  show.value = false;
  setTimeout(() => {
    beforeMount.value = false;
    mounted.value = false;
    activated.value = false;
    show.value = true;
  }, 100);
}

function toggle() {
  show.value = !show.value;
}
</script>

<style scoped>
.lifecycle-demo {
  max-width: 400px;
  margin: 30px auto;
  padding: 24px;
  background: #f5f5f5;
  border-radius: 8px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  margin-bottom: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  transition: background 0.3s;
}
li.active {
  background: #b2dfdb;
  font-weight: bold;
}
button {
  margin-right: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  background: #42b983;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background: #369870;
}
</style>
