<template>
    <div class="container d-flex flex-row justify-content-center">
        <form>
            <h1 class="headers"> Kontakt mig </h1>
            <br>
            <b-form-group
                    id="input-group-1"
                    label="Navn:"
                    label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="form.navn"
                        type="text"
                        required
                        placeholder="Indtast dit navn.."
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2"
                          label="Skriv din besked:"
                          label-for="input-2">
                <b-form-textarea
                        id="input-2"
                        v-model="form.besked"
                        required
                        placeholder="Besked.."
                        rows="5"
                        max-rows="5"
                ></b-form-textarea>
            </b-form-group>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    besked: '',
                    navn: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>