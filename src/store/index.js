import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    todos:[],
  },

  getters:{
    todoCount(state){
      return state.todos.length;
    }
  },

  mutations:{
    addTodo(state, todo){
      state.todos.push(todo);
    },

    delTodo(state, index){
      state.todos.splice(index, 1);
    },
    changeState(state,index){
      state.todos[index].completed = !state.todos[index].completed;

    }
  },

  actions:{
    addTodo(context, todo){
      if(todo.value != ""){
        context.commit("addTodo", todo);
      }
    },
    delTodo({commit}, index){
      commit("delTodo", index);
    },
    changeState({commit}, index){
      commit("changeState", index);
    }

  },

  modules:{}
});

export default store;
