import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      component: HelloWorld
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title ="张永铧 &raquo; 为什么坚持，想一想当初";
  next();
})
export default router