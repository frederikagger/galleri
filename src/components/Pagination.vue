<template>
  <div class="mx-auto my-5">
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <router-link :to="'/galleri?page='+prevPage" v-show="currentPage!==1" class="page-link">Previous
          </router-link>
        </li>
        <router-link :to="'/galleri?page='+index"
                     v-for="index in numberOfPages"
                     :key="index"
                     :class="index == currentPage ? 'active' : ''"
                     class="page-item"><a class="page-link">{{ index }}</a></router-link>
        <li class="page-item">
          <router-link :to="'/galleri?page='+nextPage" v-show="currentPage!==numberOfPages" class="page-link">Next
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      currentPage: Number(this.$route.query.page),
      nextPage: Number,
      prevPage: Number
    };
  },
  created() {
    this.nextPage = this.currentPage + 1
    this.prevPage = this.currentPage - 1
  },
  computed: {
    ...mapGetters([
      'paintings',
      'pageSize',

    ]),
    numberOfPages() {
      return Math.ceil(this.paintings.length / this.pageSize);
    },
  },
  watch: {
    '$route' () {
      console.log(this.currentPage)
      this.currentPage = Number(this.$route.query.page)
      this.nextPage = this.currentPage++
      this.prevPage = this.currentPage--
    }
  }
};
</script>

<style scoped>

</style>
