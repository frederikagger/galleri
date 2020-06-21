<template>
    <div id="card" class="col-sm-6 col-md-4">
        <div class="card">
            <h4 class="card-header">
                {{painting.id}} <small> Pris: {{painting.price}} </small>
            </h4>
            <div class="card-body">
                <img :src="painting.url" class="img-fluid" v-on:click="showImg">
                <p> {{painting.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['painting'],
        data() {
            return {
                imgShow: false
            }
        },
        methods: {
            showImg() {
                this.imgShow = !this.imgShow;
            }
        }
    }
</script>

<style scoped>
    .card {
        border: 1px  black;
        box-shadow: 1px 1px 5px black;
    }
    #card{
        padding: 20px;
    }

    img:hover{
        cursor: pointer;
    }


</style>