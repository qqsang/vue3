<template>
  <h3>{{ name }}</h3>
  {{ processStatus }}
  <button @click="resetName">重置</button>
  <button v-on:click="setName">设置</button>
  <div class="menu">
    <div
      :class="['menu-item', { active: currentItem === index }]"
      @click="currentItem = index"
      v-for="(item, index) in menuList"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
  <div v-for="(post, index) in postList" :key="index">
    {{ index + 1 }}.{{ post.content }} - {{ post.author }}
    <p v-if="visable">隐藏的内容</p>
  </div>
  <button @click="visable = !visable">{{ visable ? '隐藏' : '显示' }}</button>
</template>
<script>
export default {
  data() {
    return {
      name: 'NINGHAO',
      visable: false,
      menuList: ['首页', '热门', '发布'],
      currentItem: 0,
      postList: [
        {
          id: 1,
          content: '《天龙八部》',
          author: '金庸',
        },
        {
          id: 2,
          content: '《还珠格格》',
          author: '琼瑶',
        },
        {
          id: 3,
          content: '《唐伯虎点秋香》',
          author: '周星驰',
        },
      ],
    };
  },
  watch: {
    name(newName, oldName) {
      console.log(`name 发生了变化：${oldName} -> ${newName}`);
    },
  },
  computed: {
    processStatus() {
      return this.name === 'NINGHAO' ? '初始化...' : '成功设置了数据';
    },
  },
  created() {
    console.log('App 组件已创建');
    this.setName();
  },
  methods: {
    setName() {
      setTimeout(() => {
        this.name = '宁皓网';
      }, 3000);
    },
    resetName() {
      this.name = 'NINGHAO';
    },
  },
};
</script>
<style>
@import './style/app.css';
</style>
