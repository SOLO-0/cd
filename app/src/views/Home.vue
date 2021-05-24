<template>
  <div class="home">
    <div class="cards-wrapper">
      <button
          class="cards-card"
          v-for="card in cards"
          :key="card.number"
      >
        <span >{{ card.number }}</span>
        <span >{{ card.owner }}</span>
        <span >{{ card.expiration }}</span>
        <span >{{ card.type }}</span>
        <button @click="deleteCard(card.number)">delete</button>
        <button @click="showCard(card.number)">show</button>
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Home",
  data() {
    return {
      data: {}
    }
  },
  computed: {
    ...mapGetters({
      cards: 'GET_DATA'
    })
  },
  mounted() {
    this.$store.dispatch('DATA')
  },
  methods: {
    showCard(value) {
      this.$router.push(`/card/${value}`)
    },
    deleteCard(value) {
      this.$store.dispatch('DELETE_CARD', value)
    }
  }
};
</script>
<style scoped>
.cards-card{
  background: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px 0 #00000060;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: none;
  outline: none;
  cursor: pointer;
}
.cards-card > span {
  margin-bottom: 5px;
}
</style>
