<script setup>
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';
</script>

<template>
    <section>
        <Bai1></Bai1>
    </section>
        
    <section>
        <Bai2></Bai2>
    </section>

    <section>
        <Bai3></Bai3>
    </section>

    <Bai4></Bai4>
</template>

<style scoped>
    section{
        display: flex;
        text-align: center;
        justify-content: center;
        border: 1px solid gray;
        margin: 10px ;
        padding: 8px;
    }
</style>
