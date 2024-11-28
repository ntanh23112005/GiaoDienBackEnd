<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

      <nav>
        <RouterLink to="/bai1">Bài 1</RouterLink>
        <RouterLink to="/bai2">Bài 2</RouterLink>
        <RouterLink to="/bai3">Bài 3</RouterLink>
        <RouterLink to="/bai4">Bài 4</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped></style>
