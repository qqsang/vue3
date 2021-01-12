<template>
  <div @click="onClick">宁皓王，关于</div>
</template>
<script>
export default {
  methods: {
    onClick() {
      //this.$router.push('/');//点击浏览器返回，会返回上一级历史，这个push操作会保留历史
      this.$router.replace({ name: 'home' }); //replace 不会保留历史
    },
  },
};
</script>