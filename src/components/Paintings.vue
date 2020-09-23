<template>
        <div class="row">
            <app-painting v-for="painting in paintings" :key="painting.url" :painting="painting"/>
            <app-pagination :current-page="Number(this.page)" :number-of-pages="this.pages"/>
        </div>
</template>

<script>
    import Painting from './Painting';
    import Pagination from './Pagination';
    import {mapGetters} from 'vuex'

    export default {
      metaInfo: {
        title: "Galleri"
      },
      props: {
        page: {
          required: true
        }
      },
      components: {
            appPainting: Painting,
            appPagination: Pagination,
        },
        computed: {
            ...mapGetters([
              'paintings',
            ]),
            pages() {
                return Math.ceil(this.paintings.length / this.pageSize);
            },
        },
        data: function () {
            return {
                pageSize: 9,
            }
        },
    }
</script>

<style scoped>

</style>
