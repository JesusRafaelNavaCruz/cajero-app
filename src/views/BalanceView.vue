<template>
  <div>
    <b-container>
      <b-row class="py-5">
        <b-col>
          <router-link to="/">
            <b-icon icon="arrow-left"></b-icon>
            Regresar
          </router-link>
        </b-col>
      </b-row>
      <BalanceComponent/>
    </b-container>
  </div>
</template>
<script>
import BalanceComponent from '@/components/BalanceComponent.vue';
import { mapState } from "vuex";
export default {
    components: {
        BalanceComponent,
    },
  computed: {
    ...mapState(["balance"]),
    amountAvaliable() {
      return this.balance;
    },
  },
};
</script>