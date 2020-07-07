<template>
    <div class="container">
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <router-link :to="'/hjem/'+previousPage" v-if="thisPage != 1" class="page-link">Previous</router-link>
                </li>
                <router-link :to="'/hjem/'+index"
                             v-for="index in numberOfPages"
                             :key="index"
                             active-class="active"
                             class="page-item"><a class="page-link">{{index}}</a></router-link>
                <li class="page-item">
                    <router-link :to="'/hjem/'+nextPage" v-if="thisPage != numberOfPages" class="page-link">Next</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            numberOfPages: Number,
        },
        data() {
            return {
                thisPage: parseInt(this.$route.params.id),
                nextPage: parseInt(this.$route.params.id)+1,
                previousPage: parseInt(this.$route.params.id)-1
            }
        },
        watch: {
            '$route'(to){
                    this.thisPage = parseInt(to.params.id)
                    this.nextPage = this.thisPage+1
                    this.previousPage = this.thisPage-1
            }
        }
    }
</script>

<style scoped>

</style>