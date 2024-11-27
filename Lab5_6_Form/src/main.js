import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.css';  
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const app = createApp(App)

app.use(Antd)
app.use(Vue3ColorPicker)
app.mount('#app')
