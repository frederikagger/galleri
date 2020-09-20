<template>
    <div>
        <div class="row">
            <app-painting v-for="painting in paintings" :key="painting.url" :painting="painting"/>
            <app-pagination :current-page="currentPage" :number-of-pages="pages"/>
        </div>
    </div>
</template>

<script>
    import Painting from './Painting';
    import Pagination from './Pagination';
    import {mapActions} from 'vuex'

    export default {
        created() {
            this.get();
        },
        methods: {
            ...mapActions([
                'savePaintings'
            ]),
          addToStore(paintings) {
                this.$store.dispatch('savePaintings', paintings);
            }
        },
        components: {
            appPainting: Painting,
            appPagination: Pagination,
        },
        computed: {
            paintings() {
                return this.$store.getters.paintings;
            },
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
