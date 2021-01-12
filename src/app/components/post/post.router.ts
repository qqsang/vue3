import { RouteRecordRaw } from "vue-router";
import PostIndex from './index/post-index.vue';
import PostShow from './show/post-show.vue';
import PostMeta from './show/components/post-meta.vue';
/**
 * 创建路由
 */
const router: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    name: 'post',
    component: PostIndex,
    props: {
      sort: 'populer'
    }
  },
  {
    path: '/posts/:postId',
    name: 'PostShow',
    component: PostShow,
    props: true,
    children: [
      {
        path: 'meta',
        name: 'postMeta',
        component: PostMeta,
        meta: {
          requiresAuth: true
        },
        props: {
          metaName: 'metaName',
        }
      }
    ]
  }
];

export default router;