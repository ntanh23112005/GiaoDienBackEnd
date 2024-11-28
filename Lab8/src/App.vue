<template>
  <div>
    <router-link to="/">Trang chủ</router-link> |
    <router-link to="/profile">Thông tin người dùng</router-link> |
    <router-link to="/blogs">Danh sách bài viết</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
    <hr>  
    <router-view></router-view>
  </div>
</template>
