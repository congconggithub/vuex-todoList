<template>
  <div class="todolist">
    <ul class="list-group">
      <p>所有项目：</p>
      <li class="list-group-item" v-for="(todo,index) in todos">
        <input type="checkbox" :checked="(todo,index).completed" @change="changeState(index)">
        <span>{{todo.value}}</span>
        <button class="btn btn-del" @click="delTodo(index)">删除</button>
      </li>


    </ul>

    <ul class="list-group">
      <p>待办事项：</p>
<!--      <div class="list-group">-->
<!--        <a class="list=group-item" v-bind:class="{'completed}: todo.completed}" v-for="(todo,index) in todos">-->
<!--          <router-link :to="{name:'Todo', params:{id: todo.id}}">{{id:todo.id}}</router-link>-->
<!--        </a>-->
<!--      </div>-->


      <li class="list-group-item" v-if=" todo.completed == 'false' " v-for="(todo,index) in todos"  >
        <span>{{todo.value}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <p>已完成：</p>
      <li class="list-group-item" v-if=" todo.completed == 'true' " v-for="(todo,index) in todos"  >
        <span>{{todo.value}}</span>
      </li>
    </ul>


  </div>
</template>

<script type="text/javascript">
  import {mapState} from "vuex";

  export default {
    data(){
      return {
      }
    },
    methods:{
      delTodo(index){
        this.$store.dispatch('delTodo',index)
      },
      changeState(index){
        this.$store.dispatch('changeState',index)

      },
    },
    computed:{
      ...mapState(['todos'])
    }
  }
</script>
