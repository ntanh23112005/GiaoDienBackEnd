<template>
    <!-- Phần Form để thêm/sửa thông tin -->
    <div class="row">
        <h2><strong>Bài 4</strong></h2>
        <form @submit.prevent="submitForm" class="col-4">
            <h3>Thêm/sửa học sinh</h3>
            <div class="my-3">
                <label for="" class="form-label">Họ tên:</label>
                <input type="text" v-model="student.name" id="name" class="form-control" required
                    placeholder="Họ và tên học sinh...">
            </div>
            <div class="my-3">
                <label for="" class="form-label">Điểm:</label>
                <input type="number" v-model="student.score" id="score" class="form-control" required
                    placeholder="Điểm...">
                    <p v-if="student.score < 0 || student.score > 10" style="color: red;">Điểm từ 1 đến 10</p>
            </div>
            <div class="my-3">
                <label for="" class="form-label">Ngày sinh:</label>
                <input type="date" v-model="student.dob" id="dob" class="form-control" required
                    placeholder="Ngày sinh...">
            </div>

            <button type="submit" class="btn btn-success">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
        </form>

        <!-- Table danh sách sinh viên -->
        <div class="col-8">
            <h3>Danh sách học sinh</h3>
            <table class="table table-bordered table-hover">
                <thead class="bg-danger">
                    <tr>
                        <th>Họ và tên</th>
                        <th>Điểm số</th>
                        <th>Ngày sinh</th>
                        <th colspan="2">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stu, index) in students" :key="index">
                        <td>{{ stu.name }}</td>
                        <td>{{ stu.score }}</td>
                        <td>{{ stu.dob }}</td>
                        <td>
                            <button @click="editStudent(index)" class="btn btn-warning">Sửa</button>
                        </td>
                        <td>
                            <button @click="deleteStudent(index)" class="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

//dữ liệu mẫu
const students = ref([
    { name: 'Nguyễn Thế Anh', score: 10, dob: '2005-11-23' },
    { name: 'Nguyễn Thế Em', score: 9, dob: '2005-11-23' },
])

// dữ liệu form
const student = ref({
    name: '',
    score: null,
    dob: ''
})

let isEditing = ref(false)
let editingIndex = ref(null)

function submitForm() {
    if (isEditing.value) {
        //Cập nhật thông tin học sinh

        //{student.value} tạo ra 1 bản sao mới của đối tượng students.value
        students.value[editingIndex.value] = { ...student.value }
        isEditing.value = false
        editingIndex = null
    } else {
        //Thêm học sinh mới
        students.value.push({...student.value })
    }
    resetForm()
}

function editStudent(index) {
    student.value = {...students.value[index]}
    isEditing.value = true
    editingIndex.value = index
}

function deleteStudent(index){
    students.value.splice(index,1);
    resetForm()
}


function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    }
}
</script>