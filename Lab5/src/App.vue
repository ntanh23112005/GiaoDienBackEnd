<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="nav nav-bar mt-5 fs-5">
    <router-link class="nav-link" to="/bai1">Bài1</router-link>
    <router-link class="nav-link" to="/bai2">Bài2</router-link>
    <router-link class="nav-link" to="/bai3">Bài3</router-link>
    <router-link class="nav-link" to="/bai4">Bài4</router-link>
  </nav>

  
  <RouterView />
</template>

<style scoped>

</style>
