<template>
    <div>
        <input type="text" @change="updateText">
        <button @click="addEl">ADD</button>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        methods:{
            addEl(){
                this.$emit("addEl")
            },
            updateText(e){
                const text = (e.target.value);
                this.$emit("updateText",text)
            }
        }

    }
</script>

<style>
button{
    background: forestgreen;
    border-radius: 10px;
}
</style>