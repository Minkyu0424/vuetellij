
<template>
  <div class="parent-container">
    <h2>부모 컴포넌트</h2>
    <div class="info-box">
      <p>현재 카운트: {{ count }}</p>
      <p>선택된 색상: {{ selectedColor }}</p>
    </div>

    <EmitChild
        :count="count"
        :colors="availableColors"
        :selected-color="selectedColor"
        @increment="incrementCount"
        @decrement="decrementCount"
        @color-change="updateColor"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EmitChild from './EmitChild.vue'

// 상태 정의
const count = ref(0)
const selectedColor = ref('blue')
const availableColors = ['blue', 'green', 'red', 'purple']

// 이벤트 핸들러
const incrementCount = () => {
  count.value++
}

const decrementCount = () => {
  count.value--
}

const updateColor = (newColor: string) => {
  selectedColor.value = newColor
}
</script>

<style scoped>
.parent-container {
  border: 2px solid #2196F3;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
}

.info-box {
  background-color: #E3F2FD;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}
</style>