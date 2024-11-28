<template>
    <div class="row">
        <div class="p-3 col-7">
            <form action="" @submit.prevent="doRegister">
                <h3>Form đăng ký</h3>
                <div class="my-3">
                    <label for="" class="form-label">Họ tên:</label>
                    <input type="text" v-model="name" class="form-control" placeholder="Nhập họ và tên">
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Email</label>
                    <input type="email" v-model="email" class="form-control" placeholder="Nhập email">
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Password:</label>
                    <input type="password" v-model="password" class="form-control" placeholder="Đặt mật khẩu">
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Ngày sinh:</label>
                    <input type="date" v-model="dob" class="form-control">
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Giới tính</label>
                    <input type="radio" v-model="getSex" name="sex" value="male"><label for="">Nam</label>
                    <input type="radio" v-model="getSex" name="sex" value="female"><label for="">Nữ</label>
                    <input type="radio" v-model="getSex" name="sex" value="orther"><label for="">Khác</label>
                </div>
                <div class="my-3">
                    <label for="" class="form-label">Ngôn ngữ</label>
                    <input type="checkbox" v-model="language" value="VN"><label for="">Tiếng Việt</label>
                    <input type="checkbox" v-model="language" value="ENT"><label for="">Tiếng Anh</label>
                    <input type="checkbox" v-model="language" value="JP"><label for="">Tiếng Nhật</label>
                </div>

                <button type="submit" class="btn btn-primary">Đăng ký</button>
            </form>
        </div>

        <div class="p-3 col-5">
            <h3>Thông tin đã đăng kí</h3>
            <p class="my-3"><strong>Họ và tên: </strong>{{ registeredData.name }}</p>
            <p class="my-3"><strong>Email: </strong>{{ registeredData.email }}</p>
            <p class="my-3"><strong>Ngày sinh: </strong>{{ registeredData.dob }}</p>
            <p class="my-3"><strong>Giới tính: </strong>{{ registeredData.getSex }}</p>
            <p class="my-3"><strong>Ngôn ngữ: </strong>{{ registeredData.language.join(", ") }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref('');
const email = ref('');
const password = ref('');
const dob = ref('');
const getSex = ref('');
const language = ref([]);

const registeredData = ref({
    name: '',
    email: '',
    dob: '',
    getSex: '',
    language: []
});

const doRegister = () => {
    registeredData.value = {
        name: name.value,
        email: email.value,
        dob: dob.value,
        getSex: getSex.value,
        language: [...language.value]
    };
}

</script>