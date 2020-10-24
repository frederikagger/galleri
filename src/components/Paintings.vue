<template>
  <div>
    <div class="row">
      <app-painting v-for="index in pageSize*this.$route.query.page" :key="index" :painting="paintings[index]"/>
    </div>
    <app-pagination/>
  </div>
</template>

<script>
import Painting from './Painting';
import Pagination from './Pagination';
import {mapGetters} from 'vuex';

export default {
  metaInfo: {
    title: 'Galleri',
  },
  data() {
    return {
      index: 1,
    };
  },
  components: {
    appPainting: Painting,
    appPagination: Pagination,
  },
  computed: {
    ...mapGetters([
      'paintings',
      'pageSize',
    ]),
  },
  watch: {
    '$route'() {
      this.index = this.index * Number(this.$route.query.page)
    }
  }
}
</script>

<style scoped>

</style>
