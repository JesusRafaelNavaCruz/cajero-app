<template>
  <div>
    <b-container>
      <b-row align-h="center" v-if="Object.keys(movements).length > 0">
        <b-col cols="12" sm="12" md="4">
          <ul>
            <li v-for="(move, index) in movements" :key="index">
              <div class="d-flex py-4 justify-content-around align-items-center">
                <div class="icons">
                  <b-icon class="h3 mb-0" icon="box-arrow-down" v-if="move.action === 'Deposito'"></b-icon>
                  <b-icon class="h3 mb-0" icon="box-arrow-up" v-else></b-icon>
                </div>
                <div class="label">
                    <p class="mb-0 text-center">{{ moment(move.date).format('LLL') }}</p>
                    <p class="mb-0 text-center" v-if="move.action === 'Deposito'">Deposito</p>
                    <p class="mb-0 text-center" v-else>Retiro</p>                    
                </div>
                <div class="amount">
                    <p :class="`${move.color} text-center mb-0`">{{ move.amount }}</p>
                </div>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>

      <v-row align-h="center" class="mt-5 " v-else>
        <v-col cols="12" sm="12" md="6">
          <h2 class="text-center">Información no disponible</h2>
        </v-col>
      </v-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getHistory']),
        movements() {
          return this.getHistory.map((move) => {
            return {
                action: move.action,
                amount: move.action === 'Deposito' ? `+ $ ${move.amount}` : `- $ ${move.amount}`,
                color: move.action === 'Deposito' ? 'text-success' : 'text-danger',
                date: move.date,
            }
          })
        }
    }
}
</script>
<style scoped>
ul {
  max-height: 500px;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0;
}
li {
  list-style: none;
  padding: 0;
  width: 100%;
}

li:nth-child(odd) {
    background: rgba(1, 180, 245, 0.1);
}li:nth-child(even) {
    background: rgba(252, 252, 252, 0.1);
}

</style>