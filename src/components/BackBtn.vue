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
    </b-container>
  </div>
</template>
<script>
export default {
    name: 'BackBtn',
}
</script>