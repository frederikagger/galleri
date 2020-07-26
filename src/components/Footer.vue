<template>
    <div>
        <nav class="nav justify-content-center bg-dark">
            <a class="nav-link btn btn-sm btn-secondary" href="#">Kontakt</a>
            <router-link to="/admin/upload" class="btn btn-secondary btn-sm nav-link">Admin</router-link>
        </nav>
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
    nav {
        padding: 10px;
    }
</style>