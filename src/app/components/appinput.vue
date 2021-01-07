<template>
  用户名：<input
    type="text"
    ref="username"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  密码：<input type="password" />
</template>
<script>
export default {
  mounted() {
    console.log(this.$refs);
    this.$refs.username.focus();
  },
  props: {
    modelValue: String,
  },
};
</script>