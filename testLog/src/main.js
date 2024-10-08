import { createApp } from 'vue';  // Vue 3のcreateAppを使う
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import Dashboard from './components/Dashboard.vue';

// ルーティングの設定
const routes = [
  { path: '/', component: HomeView },
  { path: '/dashboard', component: Dashboard }
];

// ルーターの作成
const router = createRouter({
  history: createWebHistory(),
  routes
});

// アプリケーションの作成
const app = createApp(App);

// ルーターを使用
app.use(router);

// アプリをマウント
app.mount('#app');
