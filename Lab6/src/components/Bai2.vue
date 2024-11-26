<template>
    <div class="">
        <h2><strong>Bài 2</strong></h2>
        <h3>Nhập tháng sinh của bạn</h3>
        <input type="number" v-model.number="month" class="form-control">
        <p v-if="month<1 || month>12" style="color: red;">Vui lòng nhập tháng 1 - 12</p>
        <p v-else-if="month >=1 && month <=3">Mùa Xuân</p>
        <p v-else-if="month <=6">Mùa Hạ</p>
        <p v-else-if="month <=9">Mùa Thu</p>
        <p v-else>Mùa Đông</p>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    const month = ref('1');
</script>

<style scoped>
input{
        width: 100%;
    }
</style>