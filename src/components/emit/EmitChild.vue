<template>
  <div class="child-container">
    <h3>자식 컴포넌트</h3>
    
    <div class="controls">
      <button @click="$emit('decrement')" class="control-button">
        감소 (-)
      </button>
      <span class="count-display">{{ count }}</span>
      <button @click="$emit('increment')" class="control-button">
        증가 (+)
      </button>
    </div>

    <div class="color-selector">
      <p>색상 선택:</p>
      <select 
        :value="selectedColor"
        @change="$emit('color-change', ($event.target as HTMLSelectElement).value)"
        class="color-select"
      >
        <option v-for="color in colors" :key="color" :value="color">
          {{ color }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
// props 정의
defineProps<{
  count: number
  colors: string[]
  selectedColor: string
}>()

// 이벤트 정의
defineEmits<{
  increment: []
  decrement: []
  'color-change': [color: string]
}>()
</script>

<style scoped>
.child-container {
  border: 2px solid #4CAF50;
  padding: 15px;
  border-radius: 6px;
  margin-top: 10px;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 15px 0;
}

.control-button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.control-button:hover {
  background-color: #45a049;
}

.count-display {
  font-size: 1.2em;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
}

.color-selector {
  margin-top: 15px;
}

.color-select {
  padding: 5px;
  border-radius: 4px;
  margin-left: 10px;
}
</style>