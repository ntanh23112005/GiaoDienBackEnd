<template>
    <div class="p-5 w-75">
        <input type="text" v-model="userInput" placeholder="Nhập dữ liệu vào đây" class="form-control">
        <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
</template>
<script setup>
import { ref } from "vue";
const userInput = ref('Thế Anh đẹp trai lắm đó')
</script>