<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <form>
        <h2 class="headers">Upload billed</h2>
        <div class="form-group">
          <input type="file" id="fil" multiple
                 class="form-control-file" @change="fileSelected">
          <br>
        </div>
        <div class="form-group">
          <label for="mål">Vælg mål</label>
          <select class="form-control" :class="{'is-valid': this.mål!=''}" v-model="mål" id="mål">
            <option value=""></option>
            <option value="40x40">40x40</option>
            <option value="50x50">50x50</option>
            <option value="60x60">60x60</option>
          </select>
        </div>
        <div class="form-group">
          <label for="solgt">Vælg status</label>
          <select class="form-control" :class="{'is-valid': this.solgt!=''}" v-model="solgt" id="solgt">
            <option value=""></option>
            <option value="true">Solgt</option>
            <option value="false">Til salg</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary"
                @click.prevent="uploadMultipleImages">Upload
        </button>
        <br>
        <div v-show="success" class="alert alert-success">
          {{ success }}
        </div>
        <br>
        <div v-show="error" class="alert alert-danger">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {storageRef} from '@/firebase';
import {firestore} from '@/firebase';

export default {
  methods: {
    fileSelected(event) {
      this.files = event.target.files;
    },
    uploadMultipleImages() {
      Object.entries(this.files).forEach(([key, value]) => {
        console.log(key, value);
        this.uploadImage(value);
      });
    },
    async uploadImage(file) {
      try {
        await storageRef.child(file.name).put(file);
        const downloadURL = await storageRef.child(file.name).getDownloadURL();
        console.log('uploaded a file!');
        await this.uploadToFirestore(downloadURL);
      } catch (error) {
        console.log(error);
      }
    },
    async uploadToFirestore(url) {
      try {
        await firestore.add({
          date: new Date(),
          url: url,
        });
        this.success = 'Billed uploadet';
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      files: [],
      selectedFile: null,
      mål: '',
      success: '',
      error: '',
      solgt: '',
      url: '',
      urlResized: '',
    };
  },
};
</script>

<style scoped>
h2 {
  padding-bottom: 30px;
}

.alert {
  text-align: center;
}
</style>
