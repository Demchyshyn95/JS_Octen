<template>
    <ul>
        <li><span>{{el}}<input type="checkbox"/></span></li>
    </ul>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            el: {
                type: String
            }
        },
    }
</script>

<style scoped>

</style>