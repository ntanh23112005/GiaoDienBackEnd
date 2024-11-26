<template>
    <div>
        <h2><strong>Bài 1</strong></h2>
        <h3>Nhập điểm của bạn</h3>
        <input type="number" v-model.number="score" class="form-control" placeholder="Nhập điểm của bạn">

        <p v-if="score < 0 || score > 10" style="color: red;">Điểm từ 1 đến 10</p>
        <p v-else-if="score >= 9 && score<=10 ">Xuất sắc</p>
        <p v-else-if="score >= 8">Giỏi</p>
        <p v-else-if="score >= 6.5">Khá</p>
        <p v-else-if="score >= 5">Trung bình</p>
        <p v-else>Yếu</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
const score = ref('0');
</script>

<style scoped>
    input{
        width: 100%;
    }
</style>