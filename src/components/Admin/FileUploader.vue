<template>
    <div class="container">
        <h1> Upload billed </h1>
        <form>
            <div class="form-group">
                <input type="file" class="form-control-file" @change="fileSelected">
            </div>
            <div class="form-group">
                <label for="mål">Vælg mål</label>
                <select class="form-control" v-model="mål" id="mål">
                    <option value="40x40">40x40</option>
                    <option value="50x50">50x50</option>
                    <option value="60x60">60x60</option>
                </select>
            </div>
            <div class="form-group">
                <label for="solgt">Vælg status</label>
                <select class="form-control" v-model="solgt" id="solgt">
                    <option value="true">Solgt</option>
                    <option value="false">Til salg</option>
                </select>
            </div>
            <button type="submit" class="btn btn-secondary" @click.prevent="upload">Upload</button>
        </form>
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
                if (this.selectedFile != null) {
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
            },
            post() {
                let painting = {
                    mål: this.mål,
                    solgt: this.solgt,
                    url: this.url
                }
                axios.post('https://gerdagger-72890.firebaseio.com/paintings.json', painting).then(res => console.log(res)).catch(error => console.log(error));
                this.mål = '';
                this.selectedFile = null;
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
                url: ''
            }
        }
    }
</script>

<style scoped>
    h1 {
        padding-bottom: 50px;
    }


    .container {
        height: 600px;
        text-align: center;
        padding-top: 50px;
    }

</style>