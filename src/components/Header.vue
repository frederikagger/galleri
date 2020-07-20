<template>
    <div class="header">
        <nav class="navbar navbar-expand fixed-top justify-content-center navbar-dark bg-dark" role="navigation">
            <ul class="navbar-nav nav nav-pills">
                <li class="nav-item">
                    <router-link to="/galleri/"
                                 class="nav-link  text-white"
                                 v-bind:active-class="classActive">Galleri
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/om"
                                 exact
                                 class="nav-link text-white"
                                 v-bind:active-class="classActive">Om mig
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                classActive: 'bg-white text-dark'
            }
        }
    }
</script>

<style scoped>
    .header {
        font-size: 22px;
        margin-bottom: 100px;
        font-family: 'Playfair Display', serif;

    }


</style>
