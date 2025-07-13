<template>
  <div class="lifecycle-container">
    <h2>Vue 라이프사이클 데모</h2>

    <!-- 카운터 섹션 -->
    <div class="counter-section">
      <h3>카운터: {{ count }}</h3>
      <button @click="increment">증가</button>
      <button @click="decrement">감소</button>
    </div>

    <!-- 입력 섹션 -->
    <div class="input-section">
      <input v-model="inputText" placeholder="텍스트를 입력하세요" />
      <p>입력된 텍스트: {{ inputText }}</p>
    </div>

    <!-- 라이프사이클 로그 표시 -->
    <div class="lifecycle-log">
      <h3>라이프사이클 이벤트 로그</h3>
      <ul>
        <li
          v-for="(log, index) in lifecycleLogs"
          :key="index"
          :class="{ 'fade-in': true }"
        >
          {{ log }}
        </li>
      </ul>
    </div>

    <!-- 컴포넌트 제거 테스트 -->
    <button @click="toggleChild">자식 컴포넌트 토글</button>
    <ChildComponent v-if="showChild" />
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  onUpdated,
  onBeforeMount,
  watch,
} from "vue";

// 상태 관리
const count = ref(0);
const inputText = ref("");
const lifecycleLogs = ref([]);
const showChild = ref(true);

// 메서드
const addLog = (message) => {
  lifecycleLogs.value.unshift(
    `${new Date().toLocaleTimeString()} - ${message}`,
  );
};

const increment = () => count.value++;
const decrement = () => count.value--;
const toggleChild = () => (showChild.value = !showChild.value);

// 라이프사이클 훅
onBeforeMount(() => {
  addLog("🔵 onBeforeMount: DOM이 마운트되기 전");
});

onMounted(() => {
  addLog("🟢 onMounted: DOM이 마운트됨");
});

onUnmounted(() => {
  addLog("🔴 onUnmounted: 컴포넌트가 제거됨");
});

onUpdated(() => {
  addLog("🟡 onUpdated: 컴포넌트가 업데이트됨");
});

// 상태 변화 감지
watch(count, (newValue, oldValue) => {
  addLog(`📊 카운터 변경: ${oldValue} → ${newValue}`);
});

watch(inputText, (newValue) => {
  addLog(`✏️ 텍스트 입력: ${newValue}`);
});

// 자식 컴포넌트
const ChildComponent = {
  template: `<div class="child">자식 컴포넌트</div>`,
  setup() {
    onMounted(() => {
      addLog("👶 자식 컴포넌트 마운트됨");
    });
    onUnmounted(() => {
      addLog("👋 자식 컴포넌트 제거됨");
    });
    return {};
  },
};
</script>

<style scoped>
.lifecycle-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.counter-section,
.input-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.lifecycle-log {
  margin-top: 20px;
  padding: 15px;
  background-color: #797979;
  border-radius: 8px;
}

.lifecycle-log ul {
  list-style: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
}

.lifecycle-log li {
  padding: 8px;
  margin: 5px 0;
  background-color: #000000;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

button {
  margin: 0 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}

input {
  padding: 8px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.child {
  margin-top: 20px;
  padding: 15px;
  background-color: #36c140;
  border-radius: 8px;
  text-align: center;
}
</style>
