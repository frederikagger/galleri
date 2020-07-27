<template>
    <div class="row">
        <app-painting v-for="painting in visiblePaintings" :key="painting.url" :painting="painting"/>
        <app-pagination :current-page="currentPage" :number-of-pages="pages"/>
    </div>
</template>

<script>
    import Painting from "./Painting1";
    import Pagination from "./Pagination";

    export default {
        props: {
          paintings: {
              required: true,
              type: Array
          }
        },
        components: {
            appPainting: Painting,
            appPagination: Pagination,
        },
        computed: {
            pages() {
                return Math.ceil(this.paintings.length / this.pageSize);
            },
            visiblePaintings() {
                return this.paintings.slice((this.currentPage - 1) * this.pageSize,
                    ((this.currentPage - 1) * this.pageSize) + this.pageSize);
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
        }
    }
</script>

<style scoped>


</style>