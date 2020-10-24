<template>
  <div>
    <div class="my-5 text-white">
      <br />
      <br /><br /><br /><br /><br />
      <h1 class="home">
        Gerd Agger <br />
        kunst
      </h1>
    </div>
    <span class="headline-2 my-5">
      Abstrakt kunst galleri
    </span>
    <app-slider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Slider from "@/components/Slider";

export default {
  metaInfo: {
    title: "Startside",
  },
  components: {
    appSlider: Slider,
  },
  computed: {
    ...mapGetters(["paintings"]),
    promotedPaintings: function() {
      return this.paintings.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.headline-2 {
      font-size: 2rem;
      font-weight: 200;
      color: white;
      letter-spacing: 0.5rem;
    }
</style>