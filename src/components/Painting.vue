<template>
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <div class="my-5">
      <img :src="painting.resizedURL" class="img-thumbnail" alt="Painting by Gerd Agger">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    painting: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
img{
  cursor: pointer;
}

</style>
