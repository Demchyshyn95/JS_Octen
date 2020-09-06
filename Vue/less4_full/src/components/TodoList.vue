<template>
  <div>
    <input type="text" v-model="newText">
    <button @click="addNewEl">Send</button>
    <ul>
      <li v-for="(el,i) in getTodos " :key="i">
        <TodoEl :el="el" />
      </li>
    </ul>

  </div>
</template>

<script>
import TodoEl from "./TodoEl";
import {listElModule} from "@/store/List/listEL";
import {createNamespacedHelpers} from "vuex";
import {BTN_ADD_NEW, GET_STATE} from "@/store/List/type";

const {mapActions} = createNamespacedHelpers(listElModule)
const {mapGetters} = createNamespacedHelpers(listElModule)
export default {
  name: "TodoList",
  components: {TodoEl},
  data() {
    return {
      newText: '',
    }
  },
  computed:{
    ...mapGetters({
      getTodos: GET_STATE
    })
  },
  methods: {
    ...mapActions({
      addNew: BTN_ADD_NEW
    }),
    async addNewEl() {
      try {
        const todo = {
          text: this.newText
        }
        this.addNew(todo);
        this.newText = ''
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>