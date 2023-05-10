<template>
  <div>
    <b-container>
      <BackBtn/>
      <b-row align-h="center" class="py-2 mb-5">
        <b-col cols="12" md="6" sm="12" class="text-center">
          <h1>Consultar saldo</h1>
          <p>Consulte su saldo y últimos movimientos</p>
        </b-col>
      </b-row>
      <BalanceComponent/>
    </b-container>
  </div>
</template>
<script>
import BalanceComponent from '@/components/BalanceComponent.vue';
import BackBtn from '@/components/BackBtn.vue';
import { mapState } from "vuex";
export default {
    components: {
        BalanceComponent,
        BackBtn
    },
  computed: {
    ...mapState(["balance"]),
    amountAvaliable() {
      return this.balance;
    },
  },
};
</script>