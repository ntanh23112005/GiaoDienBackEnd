<template>
    <div class="p-5">
        <p>{{ message }}</p>
        <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Ban đầu là Thế Anh đẹp trai");

const updateMessage = () =>{
    message.value = "Thay đổi rồi vẫn đẹp trai";
}
</script>