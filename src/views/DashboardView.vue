<template>
  <div>
    <b-container>
        <b-row class="py-5">
            <b-col cols="12" sm="12" md="6">
                <h3>Hola, {{ userName }}</h3>
                <p>Bienvenido a Bancomercial</p>
            </b-col>
        </b-row>
      <b-row class="mb-3">
        <b-col cols="12" sm="12" md="6">
          <h3>Elija una de las operaciones</h3>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="12" sm="12" md="3" class="mb-1" v-for="(operation, index) in operations" :key="index">
            <ButtonComponent :label="operation.name" :route="operation.route" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import ButtonComponent from '../components/ButtonComponent.vue';
export default {
  data() {
    return {
        operations: [
            {name: 'Deposito', route: '/deposit', icon: ''},
            {name: 'Retiro', route: '/withdraw', icon: ''},
            {name: 'Consultar Saldo', route: '/balance', icon: ''},
            {name: 'Movimientos', route: '/history', icon: ''},
        ]
    };
  },
  components: {
    ButtonComponent,
  },
  computed: {
    ...mapGetters(['getUser']),
    userName() {
      return `${this.getUser.name} ${this.getUser.firstLastname} ${this.getUser.secondLastname}`;
    },
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(['saveUser']),
    getUserInfo(){
      const reqHeaders = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      }
      return fetch('http://localhost:3000/users/1', reqHeaders)
        .then((response) => response.json())
        .then((data) => this.saveUser(data));
    }
  },
};
</script>