<template>
  <div>
    <h2>Đăng nhập</h2>
    <button @click="login">Đăng nhập</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // Giả lập xác thực thành công
      localStorage.setItem("isAuthenticated", true);
      this.$router.push({ name: "Dashboard" }); // Điều hướng đến Dashboard
    },
  },
};
</script>