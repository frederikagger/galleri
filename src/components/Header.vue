<template>
    <div class="header">
        <b-navbar toggleable="sm" fixed="top" type="dark" variant="dark">
            <b-navbar-brand>
                GERD AGGER
                <img src="../assets/logo.svg" alt="logo">
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav justified type class="ml-auto">
                    <b-nav-item :active-class="this.classActive" class="text-white" to="/galleri/">Galleri</b-nav-item>
                    <b-nav-item exact :active-class="this.classActive" class="text-white" to="/om">Om</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                classActive: 'bg-primary btn text-white'
            }
        }
    }
</script>

<style scoped>
    img{
        height: 30px;
        width: 30px;
    }
</style>