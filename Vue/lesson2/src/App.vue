<template>
    <div>
        <add-todo @addEl="addEl" @updateText="updateText"/>
        <todo-list :arr="array" @deleteEl="deleteEl"/>
        <forms/>
    </div>
</template>

<script>
    import AddTodo from "./components/AddTodo";
    import TodoList from "./components/TodoList";
    import Forms from "./components/Forms";
    export default {
        name:"App",
        components: {Forms, TodoList, AddTodo},
        data(){
            return{
              array:['APPLE','LG','LENOVO','XIOMI'],
                text:''
            }
        },
        methods:{
            deleteEl(i){
                   this.array.splice(i,1)
            },
            addEl(){
                this.array.push(this.text)
            },
            updateText(value){
                this.text = value;
            }
        }
    }
</script>

<style></style>