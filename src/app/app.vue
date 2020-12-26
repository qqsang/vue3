<template>
  <h3>{{ name }}</h3>
  <input type="text" v-model="content" placeholder="写点东西" />
  <span>-> v-model:{{ content }}</span
  ><br />
  <input
    type="text"
    :model="changecontent"
    @input="changecontent = $event.target.value"
  />
  -> :model 理解v-model :{{ changecontent }}
  <br />
  <textarea v-model="content1" placeholder="写更多东西"></textarea><br />
  <label for="tag-1">
    <input id="tag-1" type="checkbox" value="还珠格格" v-model="tags" />
    还珠格格
  </label>
  <label for="tag-2">
    <input id="tag-2" type="checkbox" value="西游记" v-model="tags" />
    西游记
  </label>
  <label for="tag-3">
    <input id="tag-3" type="checkbox" value="大秦帝国" v-model="tags" />
    大秦帝国
  </label>
  ->tags:{{ tags }}<br />
  <label for="subscription-annual">
    <input
      id="subscription-annual"
      type="radio"
      value="annual"
      v-model="subscription"
    />一年
  </label>
  <label for="subscription-quarterly">
    <input
      id="subscription-quarterly"
      type="radio"
      value="quarterly"
      v-model="subscription"
    />季度
  </label>
  -> 订阅时长：{{ subscription }}<br />

  <select v-model="category">
    <option value="">- 选择分类 -</option>
    <option value="development">应用开发</option>
    <option value="game">游戏开发</option>
  </select>
  -> Category:{{ category }}<br />

  <input
    type="text"
    @input="onInputContent($event, 'halo')"
    v-model="oninputcontent"
  />
  -> @input 查看控制台变化: {{ oninputcontent }}<br />

  <input type="text" @change="onChangeContent" />
  -> @Change 鼠标点空白 :{{ onchangecontent }}
  <br />
  <input type="text" v-model.lazy="vmodellazy" />
  -> v-model.lazy 点空白或会车 :{{ vmodellazy }}
  <br />
  <input type="text" v-model.number="vmodelnumber" @change="onInputNumber" />
  -> v-model.number :{{ vmodelnumber }} ,数据类型：{{ typeofvmodelnumber }}
  <br />
  <input type="text" v-model.trim="vmodeltrim" @change="onInputLength" />
  -> v-model.trim 能去空格 :{{ vmodeltrim }} , 字符长度：{{ inputlength }}
  <br />
  <input type="text" @keyup.enter="onKeyupInput" />
  -> @keyup.enter :{{ onkeyupinput }}
  <br />
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      content: '',
      content1: '',
      tags: [],
      subscription: '',
      category: '',
      oninputcontent: '',
      onchangecontent: '',
      changecontent: '',
      onkeyupinput: '',
      vmodellazy: '',
      vmodelnumber: 0,
      typeofvmodelnumber: '',
      inputlength: '',
    };
  },
  created() {
    this.typeofvmodelnumber = typeof this.vmodelnumber;
  },
  methods: {
    onInputContent(event, data) {
      console.log('event', event);
      console.log('data', data);
      this.oninputcontent = event.target.value;
    },
    onChangeContent(event) {
      console.log(event.target.value);
      this.onchangecontent = event.target.value;
    },
    onKeyupInput(event) {
      console.log(event);
      this.onkeyupinput = event.target.value;
    },
    onInputNumber() {
      this.typeofvmodelnumber = typeof this.vmodelnumber;
    },
    onInputLength() {
      this.inputlength = this.vmodeltrim.length;
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>