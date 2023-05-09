<template>
  <div>
    <b-container>
      <BackBtn/>
      <b-row align-h="center" class="py-2">
        <b-col cols="12" md="6" sm="12" class="text-center">
          <h1>Movimientos</h1>
          <p>Últimos movimientos</p>
        </b-col>
      </b-row>
      <HistoryComponent/>

    </b-container>
  </div>
</template>
<script>
import BackBtn from '@/components/BackBtn.vue';
import HistoryComponent from '@/components/HistoryComponent.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
      BackBtn,
      HistoryComponent,
    },
    computed: {
      ...mapGetters(['getHistory']),
    }
}
</script>