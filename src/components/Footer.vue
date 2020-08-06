<template>
    <div>
        <b-navbar type="dark" class="justify-content-center" variant="dark">
            <b-navbar-nav>
                <b-nav-text class="text-white my-2">
                    © 2020 FA.
                </b-nav-text>
            </b-navbar-nav>
            <b-navbar-nav class="ml-5">
                <b-nav-item :to="{name: 'Login'}" exact-active-class="active">
                    Admin
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    div {
        padding-top: 5%;
    }
</style>