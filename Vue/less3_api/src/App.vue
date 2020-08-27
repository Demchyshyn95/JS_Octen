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

    <button @click="delAll" >dellAll</button>

  </div>
</template>

<script>

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
    this.$http.get("User.json", this.user)
        .then(res => {
          return res.json()
        })
        .then(res => {
          for (let el in res) {
            this.newUser.push({id: el, ...res[el]})
          }
        })
  },

  methods: {
    submit() {
      this.$http.post("User.json", this.user)
      this.firstName = '';
      this.lastName = '';
      this.number = '';
    },
    deleteEl() {
      const input = document.getElementsByTagName('input');
      input.forEach((el) => {
        this.text = el.parentNode.childNodes[0].innerText;
        this.text2 = el.parentNode.childNodes[1].innerText;
        if (el.checked) {
          const el = this.newUser.find((el) => el.firstName === this.text && el.lastName === this.text2 );
          const id = el.id;
         this.$http.delete(`User/${id}.json`)
        }
      })
    },
    delAll(){
      this.$http.delete(`.json`)
    }
  }
}
</script>

<style>
table {
  border: 1px solid black;
}
</style>
