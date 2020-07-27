<template>
    <div class="container">
        <div class="d-flex flex-row justify-content-center">
            <form id="form">
                <h2>Upload billed</h2>
                <div class="form-group">
                    <input type="file" id="fil"
                           class="form-control-file" @change="fileSelected">
                    <br>
                </div>
                <div class="form-group">
                    <label for="mål">Vælg mål</label>
                    <select class="form-control" :class="{'is-valid': this.mål!=''}" v-model="mål" id="mål">
                        <option value="40x40">40x40</option>
                        <option value="50x50">50x50</option>
                        <option value="60x60">60x60</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="solgt">Vælg status</label>
                    <select class="form-control" :class="{'is-valid': this.solgt!=''}" v-model="solgt" id="solgt">
                        <option value="true">Solgt</option>
                        <option value="false">Til salg</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-outline-primary"
                        @click.prevent="upload">Upload
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import project from "../../firebase";

    export default {
        methods: {
            fileSelected(event) {
                this.selectedFile = event.target.files[0];
            },
            upload() {
                if (this.selectedFile!=null && this.mål!='' && this.solgt!='') {
                    let storageRef = project.storage().ref('paintings/' + this.selectedFile.name);
                    let task = storageRef.put(this.selectedFile);
                    task.then(res => {
                        this.success = (res.state === 'success');
                        res.ref.getDownloadURL().then(url => {
                            this.url = url;
                            this.post(); // send a post request after getting the downloadURL asynch
                        })
                    });
                }
            }
            ,
            post() {
                let painting = {
                    mål: this.mål,
                    solgt: this.solgt,
                    url: this.url
                }
                axios.post('https://gerdagger-72890.firebaseio.com/paintings.json', painting).then(res => console.log(res)).catch(error => console.log(error));
                let form = document.getElementById("form");
                form.reset();
                this.mål = '';
                this.solgt = '';
            }
        },
        data() {
            return {
                selectedFile: null,
                mål: '',
                solgt: '',
                progress: 0,
                success: '',
                url: '',
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

    form {
        border: solid 1px black;
        box-shadow: 1px 1px 5px black;
        padding: 50px;
        text-align: center;
        min-width: 300px;
    }

</style>