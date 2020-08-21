<template>
    <div>    <form>
        <p class="h4 text-center mb-4">Sign up</p>
        <div class="grey-text">
            <mdb-input label="Your name" icon="user" type="text" v-model="val.name"/>
            <mdb-input label="You age" icon="exclamation-triangle" type="number" v-model="val.age"/>
            <mdb-input label="Your email" icon="envelope" type="email" v-model="val.email"/>
            <mdb-input label="Your password" icon="lock" type="password" v-model="val.password"/>
        </div>
        <div>
            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"
                       value="Female"  v-model="val.selected">
                <label class="custom-control-label" for="defaultGroupExample1" value="Male" >Male</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" v-model="val.selected">
                <label class="custom-control-label" for="defaultGroupExample2">Female</label>
            </div>
        </div>
        <div class="text-center">
            <mdb-btn color="primary" @click="send">Register</mdb-btn>
        </div>
    </form>
    </div>

</template>

<script>
    import { mdbInput, mdbBtn } from 'mdbvue';
    export default {
        name: 'Forms',
        components: {
            mdbInput,
            mdbBtn
        },
        data(){
           return{
               val:{
                   name:'',
                   age:'',
                   email:'',
                   password:'',
                   selected:'',
               }
           }
        },
        methods:{
           send(){
               console.log(this.val)
           }
        }
    }

</script>

<style scoped>

</style>