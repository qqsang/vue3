<template>
  <h3 @click="onClickName">$store.state.name:{{ $store.state.name }}</h3>
  <h3>...mapState(['name']):{{ name }}</h3>
  <h3>...mapState({appName:'name'}):{{ appName }}</h3>
  <h3>...mapGetter(['gettername']):{{ gettername }}</h3>
  <p>{{ content }}-{{ currentUser }}<span v-if="loading">加载中...</span></p>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  created() {
    this.getName();
    this.getContent();
    this.$store.dispatch('getName1');
    this.getCurrentUser();
  },
  computed: {
    //...mapState(['name']),
    ...mapState({
      appName: 'name',
      loading: 'loading',
      content: 'content',
      user: 'userStore',
    }),
    ...mapGetters({
      gettername: 'gettername',
      currentUser: 'userStore/gettercurrentUser', //使用了命名空间
    }),
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions({
      getName: 'getName',
      getName1: 'getName1',
      getContent: 'getContent',
      getCurrentUser: 'userStore/getCurrentUser', //使用了命名空间
    }),
    onClickName() {
      if (this.$store.state.name === '宁皓网') {
        //this.$store.commit('setName', 'ninghaowang');
        this.setName('ninghao');
      } else {
        this.$store.commit('setName', '宁皓网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>