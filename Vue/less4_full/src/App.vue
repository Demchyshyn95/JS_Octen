<template>
<TodoList/>
</template>

<script>
import TodoList from "./components/TodoList";
import {listElModule} from "@/store/List/listEL";
import {GET_TODOS} from "@/store/List/type";
export default {
  name: 'App',
  components: {TodoList},

  async beforeMount(){
    await this.$store.dispatch(`${listElModule}/${GET_TODOS}`)
  }
}
</script>

<style>

</style>
