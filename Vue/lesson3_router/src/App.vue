<template>
  <div style="text-align: center">
    <router-link :to="{name:'home'}" tag="button" active-class="active" exact>Home</router-link>
    <router-link :to="{name:'contacts'}" tag="button" active-class="active">Contacts</router-link>
    <router-link :to="{name:'myProjects'}" tag="button" active-class="active">MyProjects</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
button{
  border-radius: 121px 121px 121px 121px;
  -moz-border-radius: 121px 121px 121px 121px;
  -webkit-border-radius: 121px 121px 121px 121px;
  border: 0px solid #000000;
  margin-right: 15px;
  font-size: 25px;
}
.active{
  -webkit-box-shadow: 0px 0px 36px 5px rgba(22,43,94,0.81);
  -moz-box-shadow: 0px 0px 36px 5px rgba(22,43,94,0.81);
  box-shadow: 0px 0px 36px 5px rgba(22,43,94,0.81);
}

</style>
