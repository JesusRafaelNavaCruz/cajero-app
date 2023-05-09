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
      <b-row align-h="center" class="py-2">
        <b-col cols="12" md="6" sm="12" class="text-center">
          <h1>Retirar</h1>
          <p>Ingrese la cantidad a retirar</p>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" md="4" sm="12">
          <b-form-input v-model="amount" :state="error"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            No cuentas con saldo suficiente para retirar
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="12" md="2" sm="12">
          <b-button variant="success" @click="withdrawAmount" :disabled="isValid || amount === 0 || amount === ''">Retirar</b-button>
        </b-col>
      </b-row>
      <BalanceComponent />
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import BalanceComponent from "@/components/BalanceComponent.vue";

export default {
  data() {
    return {
      amount: 0,
      error: "",
    };
  },
  components: {
    BalanceComponent,
  },
  computed: {
    ...mapGetters(["getBalance"]),
    isValid() {
      return parseInt(this.amount) > parseInt(this.getBalance);
    }
  },
  watch: {
    amount(newValue, value) {
      if (parseInt(newValue) <= this.getBalance) {
        this.error = "";
      } else if (this.amount === 0 && value === 0) {
        this.error = "";
      } else if (newValue > this.getBalance || value > this.getBalance) {
        this.error = false;
      }
    },
  },
  methods: {
    ...mapActions(["withdraw"]),
    withdrawAmount() {
      if (this.amount > 0) {
        this.withdraw(this.amount);
      }
    },
  },
};
</script>