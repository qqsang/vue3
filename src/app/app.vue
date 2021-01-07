<template>
  <h3>{{ name }}</h3>
  <AppButton @tab="onTabButton" @init="onInitButton"></AppButton>
  <AppButton text="修改" />
  <app-button />
  <app-button></app-button>
  <app-demo-button />
  <UserProfile />
</template>

<script>
import AppButton from './components/button.vue';
import AppDemoButton from './components/buttondemo';
import UserProfile from './components/userprofile';
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
  methods: {
    onTabButton(text) {
      console.log('on tab button:', text);
    },
    onInitButton() {
      console.log('on init button:');
    },
  },
  components: {
    AppButton,
    AppDemoButton,
    UserProfile,
  },
};
</script>

<style>
@import './styles/app.css';
</style>