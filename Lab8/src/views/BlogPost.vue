<template>
    <div>
      <h2>Chi tiết bài viết {{ postId }}</h2>
      <p>Đây là nội dung bài viết số {{ postId }}.</p>
    </div>
  </template>
  
  <script>
  import { useRoute } from "vue-router";
  
  export default {
    setup() {
      const route = useRoute();
      return {
        postId: route.params.id,
      };
    },
  };
  </script>
  