<template>
  <div>用户登录 {{ username }}</div>
  <AppInput :model-value="username" @update:model-value="username = $event" />
</template>
<script>
import AppInput from './appinput';
export default {
  data() {
    return {
      username: '',
    };
  },
  components: {
    AppInput,
  },
};
</script>