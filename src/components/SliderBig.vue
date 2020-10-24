<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="painting in paintings" :key="painting.url">
      <img class="image" :src="painting.url">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" @click="swiper.slidePrev(200)" slot="button-prev"></div>
    <div class="swiper-button-next" @click="swiper.slideNext(200)" slot="button-next"></div>
  </swiper>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'carrousel',
  data() {
    return {
      id: '',
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: false,
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  computed: {
    ...mapGetters([
      'paintings',
    ]),
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    '$route' () {
      this.id = this.$route.params.id
    }
  },
  mounted() {
    this.swiper.slideTo(this.id, 1000, false)
  }
}
</script>

<style scoped>
.image{
  margin: 0 auto;
  max-height: 100vh;
  max-width: auto;
}

</style>
