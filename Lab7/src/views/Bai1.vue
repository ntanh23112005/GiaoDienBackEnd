<template>
    <div class="w-50 my-3">
        <h3 class="text-center">Quản lý công việc</h3>

        <form @submit.prevent="addList">
            <div class="mb-3">
                <label for="" class="form-label">Tên công việc</label>
                <input type="text" v-model="newJob" placeholder="Nhập công việc cần làm" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Thêm vào</button>
        </form>

        <ul class="list-group mt-4">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(job, index) in jobs" :key="index">
                {{ job }}
                <button class="btn btn-danger" @click="removeList(index)">Xóa</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const newJob = ref('');
    const jobs = ref(['Ăn sáng', 'Đi net']);

    function addList(){
        if(newJob.value.trim()){
            jobs.value.push(newJob.value.trim());
            newJob.value = '';
        }
    };

    function removeList(index){
        jobs.value.splice(index,1);
    }
</script>