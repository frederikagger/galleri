<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <form>
        <h2 class="headers">Upload billed</h2>
        <div class="form-group">
          <input type="file" id="fil" multiple
                 class="form-control-file" @change="fileSelected">
          <br>
          <div v-if="uploadingImages" class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading..</span>
          </div>
        </div>
    <!--    <div class="form-group">
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
        </div> -->
        <button type="submit" class="btn btn-primary my-3"
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
    formatResizedURL(file) {
      if (file.type == 'image/jpeg') {
        return 'resized/' + file.name.slice(0, -4) + '_320x300.jpg';
      } else console.log('couldn\'t format the url!');
    },
    uploadMultipleImages() {
      // eslint-disable-next-line no-unused-vars
      Object.entries(this.files).forEach(([key, value]) => {
        console.log(key, value);
        this.uploadImage(value);
      });
    },
    async uploadImage(file) {
      try {
        this.uploadingImages = true
        await storageRef.child(file.name).put(file).snapshot;
        const pathResizedImage = this.formatResizedURL(file);
        const resizedImageDownloadURL = await storageRef.child(pathResizedImage).getDownloadURL();
        const orignalImageURL = await storageRef.child(file.name).getDownloadURL();
        console.log('uploaded a file!');
        await this.uploadToFirestore(resizedImageDownloadURL, orignalImageURL);
      } catch (error) {
        console.log(error);
      }
    },
    async uploadToFirestore(resizedURL, URL) {
      try {
        await firestore.add({
          date: new Date(),
          url: URL,
          resizedURL: resizedURL,
        });
        this.success = 'Billed uploadet';
        this.uploadingImages = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      files: [],
      success: '',
      error: '',
      url: '',
      urlResized: '',
      uploadingImages: false
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
