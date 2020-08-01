<template>
    <div class="container">
        <b-nav pills class="justify-content-center">
            <b-nav-item class="btn btn-outline-primary" exact-active-class="active" :to="{name: 'upload'}">
                Upload
            </b-nav-item>
            <b-nav-item class="btn btn-outline-primary" exact-active-class="active btn" :to="{name: 'delete'}">
                Slet
            </b-nav-item>
            <b-nav-item class="btn btn-outline-danger" v-if="loggedIn" @click="showbox" exact-active-class="active btn">
                Logout
            </b-nav-item>
        </b-nav>
        <transition name="bounceRight" style="animation-duration: 0.1ms" mode="out-in">
            <router-view :paintings="paintings"/>
        </transition>
    </div>
</template>

<script>
    import {auth} from "../../firebase";

    export default {
        props: {
            paintings: {
                type: Array,
                required: true
            }
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            }
        },
        methods: {
            showbox() {
                this.$bvModal.msgBoxConfirm('Er du sikker på du vil logge ud?')
                    .then(value => {
                        if (value) {
                            this.$store.dispatch('logout');
                            auth.signOut();
                            this.$router.replace({name:'login'});
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>

</style>