<template>
    <div class="mx-auto">
        <nav class="nav nav-pills justify-content-center nav-fill">
            <router-link class="mx-md-2 btn-lg btn-primary" exact-active-class="active" :to="{name: 'Upload'}">
                Upload
            </router-link>
            <router-link class="mx-md-2 btn-primary btn-lg" exact-active-class="active" :to="{name: 'Slet'}">
                Slet
            </router-link>
            <router-link class="mx-md-2 btn-primary btn-lg" exact-active-class="active" :to="{name: 'Alle'}">
                Indbakke
            </router-link>
            <button class="mx-md-2 btn-lg btn-danger" v-if="loggedIn" @click="showbox" exact-active-class="active">
                Logout
            </button>
        </nav>
        <br>
        <transition name="bounceRight" style="animation-duration: 0.1ms" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import {auth} from '@/firebase';

    export default {
      metaInfo: {
        title: "Admin side"
      },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            },
        },
        methods: {
            showbox() {
                this.$bvModal.msgBoxConfirm('Er du sikker på du vil logge ud?').then(value => {
                    if (value) {
                        this.$store.dispatch('logout');
                        auth.signOut();
                        this.$router.replace({name: 'Login'});
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
        },
    };
</script>

<style scoped>


</style>
