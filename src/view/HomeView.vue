<template>
  <div class="container">
    <h1>홈 화면</h1>
    <div class="button-container">
      <router-link to="/lifeCycle" class="nav-button">
        LifeCycle
      </router-link>
      <router-link to="/emit" class="nav-button">
        Emit
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.button-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: #45a049;
}
</style>