<template>
  <div>
    <div>
      <input type="text" placeholder="firstName" v-model="user.firstName">
      <input type="text" placeholder="LastName" v-model="user.lastName">
      <input type="number" placeholder="number" v-model="user.number">
      <button @click="submit">Submit</button>
      <button @click="deleteEl">Delete</button>
    </div>
    <div style="margin-top: 10px">
      <table style="width: 605px">
        <tr>
          <th><u>FirstName:</u></th>
          <th><u>LastName:</u></th>
          <th><u>Number:</u></th>
        </tr>
        <tr v-for="(el,i) in newUser " :key="i">
          <th>{{ el.firstName }}</th>
          <th>{{ el.lastName }}</th>
          <th>{{ el.number }}</th>
          <input type="checkbox"/>
        </tr>
      </table>
    </div>

    <button @click="delAll">dellAll</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        number: ''
      },
      newUser: [],
      id: '',
      text: '',
      text2: '',

    }
  },
  beforeMount() {
    this.getEL()
  },


  methods: {
    async getEL() {
      try {
        await axios.get(`https://htpp-less3-api.firebaseio.com/todolist.json`)
            .then(res => {
              return res.data
            })
            .then(res => {
              for (let el in res) {
                this.newUser.push({id: el, ...res[el]})
              }
              console.log(this.newUser);
            })
      } catch (e) {
        console.log(e)
      }
    },

    async submit() {
      try {
        await axios.post("https://htpp-less3-api.firebaseio.com/User.json", this.user)
      } catch (e) {
        console.log(e)
      } finally {
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.number = '';
        this.newUser = [],
           setTimeout(()=>
             this.getEL(),500
           )
      }
    },

    async deleteEl() {
      const input = document.getElementsByTagName('input');
      try {
        input.forEach((el) => {
          this.text = el.parentNode.childNodes[0].innerText;
          this.text2 = el.parentNode.childNodes[1].innerText;
          if (el.checked) {
            const el = this.newUser.find((el) => el.firstName === this.text && el.lastName === this.text2);
            const id = el.id;
            axios.delete(`https://htpp-less3-api.firebaseio.com/User/${id}.json`)
          }
        })
      } catch (e) {
        console.log(e);
      } finally {
        input.forEach((el) => {
          if (el.checked) {
            el.checked = false
          }
        })
        this.newUser = [],
            setTimeout(() => this.getEL(), 1000)
      }

    },
    delAll() {
      axios.delete(`https://htpp-less3-api.firebaseio.com/.json`)
    }
  }
}
</script>

<style>
table {
  border: 1px solid black;
}
</style>
