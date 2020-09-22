<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="this.paintings[0].url" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img :src="this.paintings[1].url" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img :src="this.paintings[2].url" class="d-block w-100" alt="">
      </div>
    </div>
    <a class="carousel-control-prev" @click="forward" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" @click="back" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'paintings',
    ])
  },
  methods: {
    next() {
      this.count++;
    },
    prev() {
      this.count--
    }
  },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>

</style>
