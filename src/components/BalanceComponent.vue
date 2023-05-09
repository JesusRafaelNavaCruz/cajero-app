<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <b-col cols="6" class="text-center">
          <h1>Saldo disponible:</h1>
          <h1>$ {{ getBalance }}</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getBalance'])
    }
}
</script>