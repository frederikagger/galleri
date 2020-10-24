<template>
  <form class="form mx-auto">
    <h1 class="h1 mb-3">Kontakt mig</h1>
    <br>
    <div class="form-group">
      <label for="input-1">Navn*</label>
      <input class="form-control" id="input-1" v-model="form.navn" type="text" required placeholder="Indtast dit navn"
             :class="{'is-valid': this.form.navn}">
    </div>
    <div class="form-group">
      <label for="input-2">Besked*</label>
      <textarea class="form-control" id="input-2" v-model="form.besked" required placeholder="Indtast besked" rows="5"
                max-rows="5"
                :class="{'is-valid': this.form.besked}"
      ></textarea>
    </div>
    <div style="text-align: center">
      <button @click.prevent="sendMessage" class="btn-lg btn-primary">Send</button>
    </div>
    <div v-if="success" class="alert alert-success my-3">
      {{ success }}
    </div>
    <div v-if="error" class="alert alert-danger my-3">
      {{ error }}
    </div>
  </form>
</template>

<script>
import {messagesRef} from '@/firebase';

export default {
  metaInfo: {
    title: 'Kontakt mig',
  },
  data() {
    return {
      form: {
        besked: '',
        navn: '',
      },
      success: '',
      error: '',
    };
  },
  methods: {
    async sendMessage() {
      if (this.form.besked && this.form.navn) {
        try {
          await messagesRef.add(this.form)
          this.resetForm();
          this.success = 'Besked sendt!';
        } catch (error) {
          this.error = error;
          console.log(error);
        }
      }
      else{
        this.error = 'Udfyld begge felter'
      }
    },
    resetForm() {
      this.form.besked = '';
      this.form.navn = '';
      this.success = '';
      this.error = '';
    },
  },
};
</script>

<style scoped>
.alert, h1 {
  text-align: center;
}

</style>
