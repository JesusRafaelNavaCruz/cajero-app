<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="6" class="text-center">
          <h1>Saldo disponible:</h1>
          <h1>$ {{ balance }}</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getHistory']),
        balance() {
          const balance = this.getHistory.reduce((total, item) => {
            return item.action === 'Deposito' ? total + parseInt(item.amount) : total - parseInt(item.amount);
          }, 0);
          return balance;
        }
    }
}
</script>