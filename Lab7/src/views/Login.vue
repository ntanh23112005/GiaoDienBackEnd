<template>
    <div class="m-5 col-4">
        <form @submit.prevent="handleLogin">
            <div class="mb-3">
                <label for="" class="form-label">Tên đăng nhập:</label>
                <input type="text" v-model="username" placeholder="Nhập username" class="form-control">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Mật khẩu:</label>
                <input type="password" v-model="password" placeholder="Nhập password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref('');
const password = ref('');

//Hàm xử lý đăng nhập
const emit = defineEmits(['loggedIn']);
function handleLogin() {
    if(username.value && password.value){
        //đúng thì phát sự kiện loggedIn đi
        emit('loggedIn', username.value);
    }
}
</script>