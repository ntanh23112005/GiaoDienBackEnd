<template>
    <div class="row">
        <div v-if="!isLoggedIn" class="col-5 p-3">
            <h3>Form đăng nhập</h3>
            <form @submit.prevent="login">
                <div class="mb-3 mt-3">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                    <p v-if="emailError" style="color: red;">{{ emailError }}</p>
                </div>
                <div class="mb-3">
                    <label>Mật khẩu:</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                    <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
                </div>
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
        <div v-else class="col-7 p-3">
            <h3>Chào mừng, {{ email }}</h3>
            <button @click="logout" class="btn btn-primary">Đăng xuất</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');

const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
    emailError.value = '';
    passwordError.value = '';

    if (!email.value) {
        emailError.value = 'Hãy nhập email !';
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Email chưa đúng định dạng !'
    }

    if (!password.value) {
        passwordError.value = 'Hãy nhập mật khẩu';
    }

    if (!emailError.value && !passwordError.value) {
        isLoggedIn.value = true;
    }
}

const logout = () => {
    isLoggedIn.value = false;
    email.value = '';
    password.value = '';
    emailError.value = '';
    passwordError.value = '';
}
</script>