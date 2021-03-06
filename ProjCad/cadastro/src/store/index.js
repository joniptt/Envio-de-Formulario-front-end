import Vue from 'vue'
import Vuex from 'vuex'

import tasks from 'src/store/module-example/tasks'


Vue.use(Vuex)


export default function (){
  const Store = new Vuex.Store ({
    modules:{
      tasks
    },

    strict: process.env.DEV
})
  return Store
}
