<template>
  <button class="button" @click="$emit('tab', text)">{{ text }}</button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '按钮',
    },
  },
  created() {
    //触发一个自定义事件
    this.$emit('init');
  },
};
</script>
<style scoped>
.button {
  outline: none;
  border: none;
  padding: 8px 16px;
  margin: 4px;
  cursor: pointer;
  border-radius: 5px;
}
.button:active {
  opacity: 0.8;
}
</style>