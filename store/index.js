import { createStore } from 'vuex'
// import dataPizza from '@/store/Datapizza'
export default createStore({
  state: {
    // pizza: dataPizza,   
  },
  getters: {
    // getPizzaFromStore(state){
      // return state.pizza
    // },   
  },
  mutations: {
    // doTestMut(state, obj){
    //   const {ind, name} = obj
    //   console.log(name)
    //   console.log(state.pizza[obj.ind].size[obj.name].checked)
    //   state.pizza[obj.ind].size[obj.name].checked = !state.pizza[obj.ind].size[obj.name].checked
    // }
  },
  actions: {
    // doTest({commit},obj){
    //   console.log(obj)
    //   commit('doTestMut', obj)
    // }
  },
  modules: {
  }
})
