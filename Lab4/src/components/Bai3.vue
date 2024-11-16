<template>
    <h2>Bài 3</h2>
{{ greeting }}
<button v-bind:title="buttonTittle" @click="changeCreeting">Click để biết giới tính mình cương</button>
</template>

<script>
export default{
    data(){
        return{
        greeting: 'Xin chào anh em!',
        buttonTittle:'Click vào đây để biết giới tính minh cường'
    };
    },

    methods:{
        changeCreeting(){
            this.greeting = 'Cày là gương',
            this.buttonTittle= 'Bạn đã biết r đó';
        }
    }
}
</script>
