<template>
<todo-item :arr="arr" @deleteEl="deleteEl"/>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem},
        props:{
            arr:{
                type:Array,
            }
        },
        methods:{
            deleteEl(event){
                this.$emit('deleteEl',event)
            }
        }
    }
</script>

<style scoped>

</style>