<template>
    <div class="col-5 m-5">
        <h2>Bình luận vào bài viết</h2>
        <div class="card">
            <img src="" class="img-on-top" alt="">
            <div class="card-body">
                <h3 class="card-title">8 loại rau giàu canxi</h3>
                <p class="card-text">Canxi là thứ đó đó nên phải ăn đó để được đó đó</p>
            </div>
        </div>
        <form @submit.prevent="submitComment">
            <div class="my-3">
                <textarea cols="60" v-model="commentText" placeholder="Nhập bình luận của bạn"></textarea>
            </div>
            <button type="submit" class="btn btn-success">Bình luận</button>
        </form>

        <div v-if="comments.length" class="my-3">
            <h5>Danh sách các bình luận</h5>
            <ul style="list-style-type: circle">
                <li v-for="(comment, index) in comments" :key="index">
                    <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(['username']);

const commentText = ref('');

const comments = ref([]);

function submitComment() {
    if(commentText.value){
        //thêm vào mảng comments
        comments.value.push({
            name: props.username,
            text: commentText.value
        });
    }
    commentText.value = '';
}
</script>