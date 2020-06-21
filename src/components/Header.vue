<template>
    <nav id="top" class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto nav nav-pills">
            <router-link to="/hjem/1"
                         class="nav-link"
                         v-bind:active-class="classActive">Home
            </router-link>
            <router-link to="/om"
                         exact
                         class="nav-link"
                         v-bind:active-class="classActive">Om
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                classActive: 'bg-secondary text-white'
            }
        }
    }
</script>

<style scoped>
    .nav-link{
        text-align: center;
    }

</style>
