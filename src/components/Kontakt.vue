<template>
    <div>
        <form class="mx-auto">
            <h1 class="h1">Kontakt mig</h1>
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
                        :class="{'is-valid': this.form.navn!=''}"
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
                        :class="{'is-valid': this.form.besked!=''}"
                ></b-form-textarea>
            </b-form-group>
            <button @click.prevent="sendMessage" class="btn btn-primary"> Send </button>
            <div v-show="success" class="alert alert-success my-3">
              {{success}}
            </div>
          <div v-show="error" class="alert alert-danger my-3">
            {{error}}
          </div>
        </form>
    </div>
</template>

<script>
    export default {
      metaInfo: {
        title: "Kontakt mig"
      },
        data() {
            return {
                form: {
                    besked: '',
                    navn: ''
                },
                success: '',
                error: ''
            }
        },
     /* methods: {
          sendMessage() {
            if(this.form.navn!='' && this.form.besked!=''){
                paintingsRef.child('beskeder').push(this.form).then(() => {
                this.form.besked = '';
                this.form.navn = '';
                this.error = '';
                this.success = 'Din besked er blevet sendt';
              }).catch(error => {
                this.success = '';
                this.error = error;

              })
            }
            else {
              this.success = '';
              this.error = 'Udfyld venligst felterne';
            }
          }
      }*/
    }
</script>

<style scoped>
  .alert, h1{
    text-align: center;
  }

</style>
