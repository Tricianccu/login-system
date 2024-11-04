<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">Welcome, {{ username }}!</div>
        <q-btn label="Logout" color="negative" @click="logout" class="q-mt-md" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  computed: {
    username() {
      return localStorage.getItem('username') || 'Guest'; // 獲取用戶名
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token'); // 登出時移除 token
      localStorage.removeItem('username'); // 移除用戶名
      this.$router.push('/login'); // 轉跳回登入頁面
    }
  }
}
</script>

<style scoped>
.q-page {
  background-color: #f5f5f5;
}
</style>
