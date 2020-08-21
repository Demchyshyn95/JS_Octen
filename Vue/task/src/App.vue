<template>
    <div>
        <input type="text" v-model="text">
        <add-and-delete-todo @addEl="addEl" @deleteEl="deleteEl"/>
        <todo-list :arr="arr"/>
    </div>
</template>

<script>
    import AddAndDeleteTodo from "./components/AddAndDeleteTodo";
    import TodoList from "./components/TodoList";

    export default {
        name: "App",
        components: {TodoList, AddAndDeleteTodo},
        data() {
            return {
                arr: ['apple', 'lenovo', 'samsung', 'sony'],
                text: '',
            }
        },
        methods: {
            addEl() {
                this.arr.push(this.text);
                this.text = ""
            },
            deleteEl() {
                const input = document.getElementsByTagName('input');
                input.forEach((el) => {
                        if (el.checked) {
                            const text = el.parentNode.innerText;
                            const newArray = this.arr.filter((el) => el !== text);
                            this.arr = newArray;
                            el.checked = false;
                        }
                    }
                )
            }
        }
    }
</script>

<style></style>