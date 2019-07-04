<template>
  <div class="form-group">
    <input type="text" class="form-control"  placeholder="what needs to be done" v-model="value"/>
    <button type="button" class="btn btn-default" @click="addTodo"> 添加 </button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        value:"",
        id:0,
        completed :'false'
      }
    },
    methods:{
      addTodo(){
        let todo = {
          value:this.value,
          id:++this.id,
          completed: false,
        };
        this.value = "";
        this.$store.dispatch("addTodo", todo);
      }
    }
  }
</script>
