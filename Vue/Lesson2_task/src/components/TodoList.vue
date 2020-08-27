<template>
    <div>
        <span v-for="(el,i) in arr" :key="i">
        <todo-item :el="el" @inputCheacked="inputCheacked"/>
    </span>
    </div>

</template>

<script>
    import TodoItem from "./TodoItem";

    export default {
        name: "TodoList",
        components: {TodoItem},
        props: {
            arr: {
                type: Array,
            }
        }
    }
</script>

<style scoped>

</style>