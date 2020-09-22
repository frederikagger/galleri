<template>
        <div class="row">
            <app-painting v-for="painting in paintings" :key="painting.url" :painting="painting"/>
            <app-pagination :current-page="currentPage" :number-of-pages="pages"/>
        </div>
</template>

<script>
    import Painting1 from './Painting1';
    import Pagination from './Pagination';
    import {mapGetters} from 'vuex'

    export default {

      components: {
            appPainting: Painting1,
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
        watch: {
            '$route'(to) {
                this.currentPage = parseInt(to.params.id);
            },
        },
        data: function () {
            return {
                currentPage: parseInt(this.$route.params.id),
                pageSize: 9,
            }
        },
    }
</script>

<style scoped>

</style>
