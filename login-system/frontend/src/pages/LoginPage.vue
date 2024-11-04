<template>
    <q-page class="flex flex-center">
      <q-card class="q-pa-md" style="width: 400px">
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>
  
        <q-card-section>
          <q-input v-model="username" label="Username" outlined />
          <q-input v-model="password" label="Password" type="password" outlined class="q-mt-md" />
          <div v-if="errorMessage" class="text-red-6">{{ errorMessage }}</div> <!-- 顯示錯誤信息 -->
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn label="Login" color="primary" @click="login" />
        </q-card-actions>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:5001/login', {
            username: this.username,
            password: this.password
          });
          if (response.data.token) {
            this.$store.dispatch('login', this.username);  // 呼叫 Vuex action
            localStorage.setItem('token', response.data.token);
            //localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', this.username);  // 保存用戶名
            this.$router.push('/');
          }
        } catch (error) {
            this.errorMessage = 'Invalid credentials!';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .q-page {
    background-color: #f5f5f5;
  }
  </style>
  