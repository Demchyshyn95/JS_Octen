<template>
    <div>
        <button @click="addEl">ADD</button>
        <button @click="deleteEl">Delete</button>

    </div>
</template>

<script>
    export default {
        name: "AddAndDeleteTodo",
        methods: {
            addEl() {
                this.$emit("addEl")
            },
            deleteEl() {
                this.$emit("deleteEl")
            }
        }
    }
</script>

<style scoped>
    button {
        background-color: forestgreen;
        border-radius: 10px;
    }
</style>