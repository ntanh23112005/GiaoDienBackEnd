<script setup>
    import { ref } from "vue";
    import CreatePost from "./CreatePost.vue";
    import PostList from "./PostList.vue";

    const posts = ref([])

    function addPost(post) {
        posts.value.push(post)
    }
</script>

<template>
    <h1>Ứng dụng đăng Blog với VUE.JS</h1>
    <CreatePost @add-post="addPost"></CreatePost>
    <PostList :posts="posts"></PostList>
</template>