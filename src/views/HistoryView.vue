<template>
  <div>
    <b-container>
      <BackBtn/>
      <b-row align-h="center" class="py-2">
        <b-col cols="12" md="6" sm="12" class="text-center">
          <h1>Movimientos</h1>
          <p>Ingrese la cantidad a depositar</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BackBtn from '@/components/BackBtn.vue';
export default {
    components: {
        BackBtn,
    }
}
</script>