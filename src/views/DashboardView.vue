<template>
  <div>
    <b-container>
        <b-row>
            <b-col>
                <h3>Bienvenido Jesus Nava</h3>
            </b-col>
        </b-row>
      <b-row>
        <b-col>
          <h3>Elija una de las operaciones</h3>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col v-for="(operation, index) in operations" :key="index">
            <ButtonComponent :label="operation.name" :route="operation.route" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
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
  }
};
</script>