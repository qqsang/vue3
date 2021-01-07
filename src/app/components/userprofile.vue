<template>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <small @click="onHinText">{{ hintext }}</small>
</template>
<script>
import UserLogin from './userlogin';
import UserRegister from './userregister';
export default {
  data() {
    return {
      currentComponent: 'UserLogin',
      hintext: '如无账号，请点我注册',
    };
  },
  components: {
    UserLogin,
    UserRegister,
  },
  methods: {
    onHinText() {
      switch (this.currentComponent) {
        case 'UserLogin':
          this.currentComponent = 'UserRegister';
          this.hintext = '如有账号，请点我登录';
          break;
        case 'UserRegister':
          this.currentComponent = 'UserLogin';
          this.hintext = '如无账号，请点我注册';
          break;

        default:
          break;
      }
    },
  },
};
</script>