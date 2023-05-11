<template>
  <div>
    <b-container>
      <BackBtn />
      <b-row align-h="center" class="py-2">
        <b-col cols="12" md="6" sm="12" class="text-center">
          <h1>Depositar</h1>
          <p>Ingrese la cantidad a depositar</p>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mb-5">
        <b-col cols="12" md="4" sm="12">
          <b-form-input v-model.number="amount" :state="error"  placeholder="Ingrese el monto deseado"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            {{ alert }}
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="12" md="1" sm="12">
          <b-button variant="success" @click="depositAmount"
            >Depositar</b-button
          >
        </b-col>
      </b-row>
      <BalanceComponent v-if="showBalance" />
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
      alert: '',
      error: null,
      amount: '',
    };
  },
  components: {
    BalanceComponent,
    BackBtn,
  },
  computed: {
    ...mapGetters(["getBalance", 'getUser', 'getHistory']),
    showBalance() {
      return this.getBalance > 0;
    },
  },
  watch: {
    amount(value) {
      if (typeof value !== 'number') {
        this.error = false;
        this.alert = 'Monto incorrecto, ingrese solo números'
      } else {
        this.error = null;
      }
      if (value === 0) {
        this.error = false;
        this.alert = 'Ingrese un monto mayor a 0'
      } else {
        this.error = null;
      }
    }
  },
  methods: {
    ...mapActions(["deposit", "saveHistory"]),

    updateUser() {
      const {id, name, firstLastname, secondLastname, bankInformation} = this.getUser;
      const reqBody = {
        id,
        name, 
        firstLastname,
        secondLastname,
        bankInformation,
        transactions: this.getHistory
      };

      const reqHeaders = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reqBody),
      };

      return fetch("http://localhost:3000/users/1", reqHeaders).then(
        (response) => response.json()
      );
    },
    depositAmount() {
      if (this.amount > 0) {
        this.deposit(this.amount);
        const trans = {
          id: Math.floor(Math.random() * 100) + 1,
          amount: this.amount,
          action: "Deposito",
          date: new Date(),
        };
        this.saveHistory(trans);
        this.updateUser();
        this.amount = null;
      }
    },
  },
};
</script>