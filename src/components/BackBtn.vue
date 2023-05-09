<template>
  <div>
    <b-container>
      <b-row class="py-5">
        <b-col>
          <router-link to="/" class="btn__back">
            <b-icon icon="arrow-left"></b-icon>
            Regresar
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
    name: 'BackBtn',
}
</script>
<style scoped>
.btn__back {
  text-decoration: none;
  font-weight: 600;
}
</style>