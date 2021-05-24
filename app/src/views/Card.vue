<template>
  <div class="about">
    <h1>Card Owner: {{ getCurrentCard.owner }}</h1>
    <h3>Card number: {{ getCurrentCard.number }}</h3>
    <h3>Card Type: {{ getCurrentCard.type }}</h3>
    <h3>Card expiration: {{ getCurrentCard.expiration }}</h3>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: 'Card',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      cards: 'GET_DATA'
    }),
    getCurrentCard() {
      return this.cards.find( value => value.number === this.$route.params.number)
    }
  }
}
</script>
