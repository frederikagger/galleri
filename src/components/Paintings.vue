<template>
    <div class="row">
        <app-painting v-for="painting in visiblePaintings" :key="painting.url" :painting="painting"/>
        <app-pagination :current-page="currentPage" :number-of-pages="pages"/>
    </div>
</template>

<script>
    import Painting from "./Painting";
    import Pagination from "./Pagination";
    import axios from 'axios'

    export default {
        created() {
            axios.get('https://gerdagger-72890.firebaseio.com/paintings.json')
            .then(res => {
                const data = res.data;
                for (let key in data){
                    const painting = data[key];
                    this.paintings.push(painting);
                }
                console.log(this.paintings)
            })
            .catch(error => console.log(error));
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
                return this.paintings.slice((this.currentPage-1) * this.pageSize,
                    ((this.currentPage-1) * this.pageSize) + this.pageSize);
            },
        },
        watch: {
            '$route'(to){
                this.currentPage = parseInt(to.params.id);
            },

        },
        data: function () {
            return {
                currentPage: parseInt(this.$route.params.id),
                pageSize: 9,
                paintings: [],
            }
        }
    }
</script>

<style scoped>


</style>