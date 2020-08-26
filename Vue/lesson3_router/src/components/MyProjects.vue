<template>
  <div>
    <div><h2>Перукарські послуги</h2></div>
    <table>
      <tr v-for="el in service" :key="el">
        <th>{{ el.name }}</th>
        <th>---- {{ el.price }} грн </th>
      </tr>
    </table>
    <div>
      <b-table hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  data() {
    return {
      service: [
        {
          name: 'Стрижка машинкою під одну насадку', price: 100
        },
        {
          name: 'Стрижка машинкою + ножиці(з миттям)', price: 150
        },
        {
          name: ' Стрижка машинкою з переходами', price: 120
        },
        {
          name: 'Дитяча стрижка(до 12 років)', price: 120
        },
        {
          name: 'Вкладання волосся', price: 90
        },
        {
          name: 'Стрижка бороди', price: 100
        },
        {
          name: 'Миття голови', price: 20
        },
        {
          name: 'Оформлення малюнка', price: 20
        },
      ],
    }
  }
}
</script>

<style scoped>
table{
margin-left:600px;
  border: 4px solid black
}
</style>