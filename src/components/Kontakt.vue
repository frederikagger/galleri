<template>
        <form class="form mx-auto">
            <h1 class="h1 mb-3">Kontakt mig</h1>
            <br>
          <div class="form-group">
            <input class="form-control" id="input-1" v-model="form.navn" type="text" required placeholder="Indtast dit navn.."
                   :class="{'is-valid': this.form.navn}">
          </div>
          <div class="form-group">
            <textarea class="form-control" v-model="form.besked" required placeholder="Besked.." rows="5" max-rows="5"
                :class="{'is-valid': this.form.besked}"
            ></textarea>
          </div>
          <div style="text-align: center">
            <button @click.prevent="sendMessage" class="btn-lg btn-primary"> Send </button>
          </div>

            <div v-show="success" class="alert alert-success my-3">
              {{success}}
            </div>
          <div v-show="error" class="alert alert-danger my-3">
            {{error}}
          </div>
        </form>
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
