<template>
    <div>
        <Login v-if="!isLoggedIn" @loggedIn="handleLoginSuccess"></Login>

        <Comment v-else :username="loggedUser"></Comment>
    </div>
</template>
<script setup>
    import Login from './Login.vue';
    import Comment from './Comment.vue';

    import { ref } from "vue";

    const isLoggedIn = ref(false);
    const loggedUser = ref('');

    function handleLoginSuccess(username) {
            loggedUser.value = username;
            isLoggedIn.value = true;
    }
</script>