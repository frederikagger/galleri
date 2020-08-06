<template>
    <div>
        <b-navbar type="dark" class="container justify-content-center mb-5">
            <b-navbar-nav justified>
                <b-nav-item class="mx-md-5 btn-lg btn-outline-primary" exact-active-class="active" :to="{name: 'Upload'}">
                    Upload
                </b-nav-item>
                <b-nav-item class="mx-md-5 btn-outline-primary btn-lg" exact-active-class="active" :to="{name: 'Slet'}">
                    Slet
                </b-nav-item>
                <b-nav-item class="mx-md-5 btn-lg btn-outline-danger" v-if="loggedIn" @click="showbox" exact-active-class="active">
                    Logout
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
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
                            this.$router.replace({name:'Login'});
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