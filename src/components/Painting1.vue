<template>
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <div class="card my-5">
      <img :src="this.painting.resizedURL" class="img-thumbnail" alt="Painting by Gerd Agger">
    </div>
  </div>
</template>

<script>
export default {
  props: ['painting'],
}
</script>

<style scoped>
.card {
  border: 1px black;
  box-shadow: 1px 1px 5px black;
  max-height: 500px;
  max-width: 500px;
  }
</style>
