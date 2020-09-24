<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="painting in paintings" :key="painting.url">
      <img :src="painting.resizedURL">
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
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 3,
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
  mounted() {
    this.swiper.slideTo(1, 1000, false)
  }
}
</script>
