<template>
<div>
  <form @submit.prevent="createCard">
    <input type="text" v-model="owner" placeholder="Имя" required>
    <input type="text" v-model="expiration" placeholder="дата окончания" required>
    <input type="text" v-model="type" placeholder="тип карты" required>
    <input type="text" v-model="number" placeholder="Номер карты" required>
    <button type="submit">Добавить</button>
  </form>
</div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      owner: '',
      expiration: '',
      type: '',
      number: ''
    }
  },
  methods: {
    createCard() {
      const newCard = {
        expiration: this.expiration,
        owner: this.owner,
        type: this.type,
        number: this.number
      }
      this.$store.dispatch('CREATE_CARD', newCard)
    }
  }
}
</script>

<style scoped>

</style>
