<template>
  <div>
    <router-link
        :to="{name:'first'}"
        tag="button"
    >first
    </router-link>
    <router-link to="/second" tag="button">Second</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
