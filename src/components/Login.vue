<template>
        <form class="form mx-auto">
            <h1 class="mb-5 h1" style="text-align: center">Login</h1>
            <div class="form-group">
                <input class="form-control" v-model="email" type="email"
                              placeholder="Indtast email">
            </div>
            <div class="form-group">
                <input class="form-control" v-model="password" type="password"
                              placeholder="Indtast password">
            </div>
          <div style="text-align: center">
            <button class="btn-lg btn-primary mb-3" @keyup.enter="login" @click.prevent="login">Login</button>
          </div>
            <div v-show="error" class="alert alert-danger">
                {{error}}
            </div>
        </form>
</template>

<script>
    import {auth} from "../firebase";

    export default {
      metaInfo: {
        title: "Login side"
      },
        data() {
            return {
                email: '',
                password: '',
                user: '',
                error: ''
            }
        },
        methods: {
            login() {
                if (this.email && this.password) {
                    auth.signInWithEmailAndPassword(this.email, this.password).then(res => {
                        if (res.user) {
                            res.user.getIdTokenResult().then(res => {
                                let token = res.token;
                                this.$store.dispatch('login', token).then(() => {
                                    this.$router.replace({name: 'Admin'});
                                })
                            })
                        }
                    }).catch(error => this.error = error);
                } else {
                    this.error = 'Udfyld felterne'
                }
            }
        }
    }
</script>
