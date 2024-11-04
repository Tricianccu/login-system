import { boot } from 'quasar/wrappers'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // 調整為你的 API 端點
});

export default boot(({ app }) => {
    app.config.globalProperties.$axios = axios // 全域注入 axios
    app.config.globalProperties.$api = api     // 自定義 API 實例
  })

export { api };
