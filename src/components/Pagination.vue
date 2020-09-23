<template>
    <div class="mx-auto my-5">
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <router-link :to="'/galleri?page='+previousPage" v-if="currentPage != 1" class="page-link">Previous
                    </router-link>
                </li>
                <router-link :to="'/galleri?page='+index"
                             v-for="index in numberOfPages"
                             :key="index"
                             active-class="active"
                             class="page-item"><a class="page-link">{{index}}</a></router-link>
                <li class="page-item">
                    <router-link :to="'/galleri?page='+nextPage" v-if="currentPage != numberOfPages" class="page-link">Next
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            numberOfPages: Number,
            currentPage: Number
        },
        data() {
            return {
                nextPage: this.currentPage + 1,
                previousPage: this.currentPage - 1
            }
        },
        watch: {
            currentPage() {
                this.nextPage = this.currentPage + 1;
                this.previousPage = this.currentPage - 1
            }
        },
    }
</script>

<style scoped>

</style>
