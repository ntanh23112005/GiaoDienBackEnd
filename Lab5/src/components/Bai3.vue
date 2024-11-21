<template>
    <div class="row p-5">
        <div class="col-7">
            <h2>Thông tin cá nhân</h2>
            <form>
                <div class="my-3">
                    <label for="" class="form-label">Họ và Tên:</label>
                    <input type="text" v-model="userInfo.name" class="form-control" placeholder="Nhập họ và tên">
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Tuổi:</label>
                    <input type="number" v-model="userInfo.age" class="form-control" placeholder="Nhập tuổi của bạn">
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Email:</label>
                    <input type="email" v-model="userInfo.email" class="form-control" placeholder="Nhập họ và tên">
                </div>
            </form>
        </div>
        <div class="col-5 bg-dark text-white p-2">
            <h2>Thông tin:</h2>
            <p class="my-3"><strong>Họ và Tên: {{ userInfo.name }}</strong></p>
            <p class="my-3"><strong>Tuổi: {{ userInfo.age }}</strong></p>
            <p class="my-3"><strong>Email: {{ userInfo.email }}</strong></p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const userInfo = reactive({
    name: '',
    age: null,
    email:''
});
</script>

<style scoped>

</style>