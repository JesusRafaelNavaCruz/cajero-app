<template>
  <div>
    <b-container>
      <BackBtn/>
      <b-row align-h="center" class="py-2">
        <b-col cols="12" md="6" sm="12" class="text-center">
          <h1>Depositar</h1>
          <p>Ingrese la cantidad a depositar</p>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" md="4" sm="12">
          <b-form-input v-model="amount"></b-form-input>
        </b-col>
        <b-col cols="12" md="1" sm="12">
          <b-button variant="success" @click="depositAmount"
            >Depositar</b-button
          >
        </b-col>
      </b-row>
      <BalanceComponent v-if="showBalance"/>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BalanceComponent from "@/components/BalanceComponent.vue";
import BackBtn from "@/components/BackBtn.vue";

export default {
  data() {
    return {
      amount: null,
    };
  },
  components: {
    BalanceComponent,
    BackBtn,
  },
  computed: {
    ...mapGetters(["getBalance"]),
    showBalance() {
      return this.getBalance > 0;
    }
  },
  methods: {
    ...mapActions(["deposit", "saveHistory"]),
    depositAmount() {
      if (this.amount > 0) {
        this.deposit(this.amount);
        const trans = {
          amount: this.amount,
          action: 'Deposito',
          date: new Date(),
        };
        this.saveHistory(trans);
        this.amount = null;
      }
    },
  },
};
</script>