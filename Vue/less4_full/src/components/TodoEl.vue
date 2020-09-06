<template>
  <div>
    <p>{{this.el.text}} --- <button @click="removeEl">Delete</button></p>
  </div>
</template>

<script>
import {listElModule} from "@/store/List/listEL";
import {createNamespacedHelpers} from "vuex";
import {REMOVE_EL} from "@/store/List/type";

const {mapActions} = createNamespacedHelpers(listElModule)
export default {
  name: "TodoEl",
  props: {
    el: {
      type: Object,
    }
  },
  methods:{
    ...mapActions({
      remove:REMOVE_EL
    }),
    removeEl(){
      this.remove(this.el.id)
    }

  }
}

</script>

<style scoped>

</style>