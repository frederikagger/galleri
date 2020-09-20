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
                        @click.prevent="uploadImage">Upload
                </button>
                <br>
                <div v-show="success" class="alert alert-success">
                    {{ success }}
                </div>
                <br>
                <div v-show="error" class="alert alert-danger">
                    {{error}}
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {paintingsRef} from '../../firebase';
    import {project} from '../../firebase';

    export default {
        methods: {
            fileSelected(event) {
                this.selectedFile = event.target.files[0];
            },
            uploadImage() {
                if (this.selectedFile != null) {
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
                                setTimeout(() => storageRef1.ref('paintings/resized/' + path).getDownloadURL()
                                    .then(urlResized => {
                                        this.urlResized = urlResized;
                                        this.uploadToDB('paintings/', url)
                                        this.uploadToDB('resized/', urlResized);
                                    }), 2000);
                            }).catch(error => this.error = error);
                        }
                    )
                } else {
                    this.error = 'Vælg venligst en fil'
                }
            },
            uploadToDB(path, url) {
                let time = new Date()
                paintingsRef.child(path).push({
                    url: url,
                    mål: this.mål,
                    solgt: this.solgt,
                    time: time.toString(),
                }).then(() => {
                    this.resetForm();
                    this.success = 'Billed uploadet'
                }).catch(error => {
                    this.error = error;
                    console.log(error)
                })
            },
            resetForm() {
                let form = document.getElementById("form");
                form.reset();
                this.error = '';
                this.solgt = '';
                this.mål = '';
            }
        },
        data() {
            return {
                selectedFile: null,
                mål: '',
                success: '',
                error: '',
                solgt: '',
                url: '',
                urlResized: '',
            }
        }
    }
</script>

<style scoped>
    h2 {
        padding-bottom: 30px;
    }

    .alert {
        text-align: center;
    }
</style>