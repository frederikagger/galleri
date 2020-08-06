<template>
    <div class="container">
        <div class="d-flex flex-row justify-content-center">
            <form id="form">
                <h2 class="headers">Upload billed</h2>
                <div class="form-group">
                    <input type="file" id="fil"
                           class="form-control-file" @change="fileSelected">
                    <br>
                </div>
                <div class="form-group">
                    <label for="mål">Vælg mål</label>
                    <select class="form-control" :class="{'is-valid': this.mål!=''}" v-model="mål" id="mål">
                        <option value=""> </option>
                        <option value="40x40">40x40</option>
                        <option value="50x50">50x50</option>
                        <option value="60x60">60x60</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="solgt">Vælg status</label>
                    <select class="form-control" :class="{'is-valid': this.solgt!=''}" v-model="solgt" id="solgt">
                        <option value=""> </option>
                        <option value="true">Solgt</option>
                        <option value="false">Til salg</option>
                    </select>
                </div>
                <button type="submit" :class="{disabled: this.uploading}" class="btn btn-outline-primary"
                        @click.prevent="uploadImage">Upload
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import {paintingsRef} from "../../firebase";
    import {project} from "../../firebase"

    export default {
        methods: {
            fileSelected(event) {
                this.selectedFile = event.target.files[0];
            },
            uploadImage() {
                if (this.selectedFile != null) {
                    this.uploading = true;
                    let storageRef1 = project.storage();
                    let storageRef = project.storage().ref('paintings/' + this.selectedFile.name);
                    let task = storageRef.put(this.selectedFile);
                    task.then(res => {
                            let index = this.selectedFile.name.indexOf('.'); //find the index of .
                            let name = this.selectedFile.name.substring(0, index);
                            let fileFormat = this.selectedFile.name.substring(index);
                            let path = name + '_320x300' + fileFormat;
                            res.ref.getDownloadURL().then(url => {
                                this.url = url;
                                setTimeout(()=> storageRef1.ref('paintings/resized/' + path).getDownloadURL().then(urlResized => {
                                    this.urlResized = urlResized;
                                    this.uploadToDB('paintings/', url)
                                    this.uploadToDB('resized/', urlResized);
                                }), 3000);
                            }).catch(error => console.log(error));
                        }
                    )
                }
            },
            uploadToDB(path, url) {
                console.log(url);
                paintingsRef.child(path).push({
                    url: url,
                    mål: this.mål,
                    solgt: this.solgt
                }).then(() => {
                    this.resetForm();
                    this.uploading = false;
                }).catch(error => console.log(error))
            },
            resetForm() {
                let form = document.getElementById("form");
                form.reset();
                this.solgt = '';
                this.mål = '';
            }
        },
        data() {
            return {
                selectedFile: null,
                mål: '',
                success: '',
                solgt: '',
                url: '',
                urlResized: '',
                uploading: ''
            }
        }
    }
</script>

<style scoped>
    h2 {
        padding-bottom: 30px;
    }

    .container {
        padding: 80px;
    }

</style>