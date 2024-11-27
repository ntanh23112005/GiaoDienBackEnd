<template>
  <h2 class="mb-5"><strong>Nơi biến tên bạn thành cái chợ</strong></h2>
  <div class="row">
    <div class="col-4">
      <form action="">
        <div class="my-3 p-3">
          <label for="" class="form-label">Họ và tên:</label> <br>
          <a-space direction="vertical">
            <a-input v-model:value="name" placeholder="Nhập tên đê" auto-size />
          </a-space>
        </div>
        <div class="my-3 p-3">
          <label for="" class="form-label">Tuổi:</label> <br>
          <a-space direction="vertical">
            <a-input-number id="inputNumber" v-model:value="age" placeholder="Nhập tuổi đê" />
          </a-space>
          <p>{{ checkAge }}</p>
        </div>

        <h3><strong>Mày muốn nó như nào</strong></h3>
        <div class="my-2">
          <label for="" class="form-label">In đậm:</label> <br>
          <a-switch v-model:checked="isBold" />
        </div>
        <div class="my-2">
          <label for="" class="form-label">Độ chà bá:</label>
          <input type="range" v-model.number="range" class="form-range" id="customRange1">
        </div>
        <div class="my-2">Làm tí màu:</div>
        <color-picker v-model:pureColor="color" v-model:gradientColor="color"/>
      </form>
    </div>
    <div class="col-8">
      <h3><strong>Kết quả mày muốn đây:</strong></h3> <br>
      <p :style="{ 'font-weight': isBold ? 'bold' : 'normal', 'font-size': range + 'px','color':color }">{{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';
const name = ref('');
const age = ref(0);
const isBold = ref(false);
const range = ref()
const result = ref('');
const color = ref('')

result.value = name.value + "-" + age.value;


const checkAge = ref('');
function ageMessage(){
  if (age.value < 18){
    checkAge.value = 'Thứ trẻ trâu chưa đủ 18'
  }else if(age.value == 18){
    checkAge.value = 'Đủ tuổi đi tù'
  }else{
    checkAge.value = 'Sắp đi được rồi'
  }
}

watch([name, age],() =>{
  result.value = `${name.value} - ${age.value}`;
  ageMessage();
})
</script>

<style scoped></style>