<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="arr.push(value)" v-if="arr.length<10">Add</button>
    <div v-for="(el,index) in arr" :key="index">{{index+1}}.{{el}}
      <button @click="dell(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myApp",

  data() {
    return {
      arr: ["сік", "яблуко", "банана"],
      value: "",
    };
  },
  methods: {
    dell(index){
      this.arr = this.arr.filter((el,i) => i !== index);
    },
  }
}
</script>

<style>
button {
  background-color: chartreuse;
}
</style>
