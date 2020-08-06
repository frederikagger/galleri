<template>
    <div class="container d-flex flex-row justify-content-center">
        <div id="form">
            <h1 class="mb-5 headers"> Login </h1>
            <div class="form-group">
                <b-form-input v-model="email" type="email"
                              placeholder="Indtast email">
                </b-form-input>
            </div>
            <div class="form-group">
                <b-form-input v-model="password" type="password"
                              placeholder="Indtast password">
                </b-form-input>
            </div>
            <button class="btn btn-primary mb-3" @keyup.enter="login" @click="login">Login</button>
            <div v-show="error" class="alert alert-danger">
                {{error}}
            </div>
        </div>
    </div>
</template>

<script>
    import {auth} from "../firebase";

    export default {
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
                if (this.email != '' && this.password != '') {
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

<style scoped>

    #form {
        border: solid 1px black;
        box-shadow: 1px 1px 5px black;
        padding: 50px;
        text-align: center;
        min-width: 300px;
        width: 400px;
        background-color: white;
        color: black;
    }
</style>