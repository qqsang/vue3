<template>
  <div class="page">
    <div class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <div class="menu">
        <router-link to="/" class="menu-item">首页</router-link>
        <router-link :to="{ name: 'about' }" class="menu-item"
          >关于</router-link
        >
        <router-link :to="{ name: 'post' }" class="menu-item">内容</router-link>
      </div>
    </div>
    <div class="page-body">
      <router-view></router-view>
    </div>
    <div class="footer">
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppFooter from './components/footer';
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
  components: { AppFooter },
};
</script>

<style>
@import './styles/app.css';
</style>