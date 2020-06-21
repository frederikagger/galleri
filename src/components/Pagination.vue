<template>
    <div class="container">
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <router-link :to="'/hjem/'+(parseInt($route.params.id)-1)" class="page-link" tabindex="-1">Previous</router-link>
                </li>
                <router-link :to="'/hjem/'+index"
                             v-for="index in numberOfPages"
                             :key="index"
                             active-class="active"
                             class="page-item"><a class="page-link">{{index}}</a></router-link>
                <li class="page-item">
                    <router-link :to="'/hjem/'+(parseInt($route.params.id)+1)" class="page-link">Next</router-link>
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
    }
</script>

<style scoped>

</style>