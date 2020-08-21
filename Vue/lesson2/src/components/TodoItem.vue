<template>
    <ul>
        <li v-for="(el,i) in arr " :key="i">{{el}}
            <button @click="remove(i)">DELETE</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "TodoItem",
        props:{
            arr:{
                type:Array,
            }
        },
        methods:{
            remove(e){
                this.$emit("deleteEl",e)
            }
        }
    }
</script>

<style scoped>

</style>