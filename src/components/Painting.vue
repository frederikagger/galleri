<template>
    <div id="card" class="col-sm-6 col-md-4">
        <div class="card">
            <h4 class="card-header">
                {{painting.id}} <small> Pris: {{painting.price}} </small>
            </h4>
            <div class="card-body">
                <a v-bind:href="painting.url">
                    <img :src="painting.url" class="img-fluid"  v-on:click="showImg">
                </a>
                <p> {{painting.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['painting'],
        methods: {
            showImg() {
                this.$emit('imageClicked', this.painting.url)
            }
        }
    }
</script>

<style scoped>
    .card {
        border: 1px  black;
        box-shadow: 1px 1px 5px black;
        transition: 0.6s;
    }
    #card{
        padding: 20px;
    }

    .card:hover{
        transform: scale(1.25);
        z-index: 100;
        cursor: pointer;
    }

    img:hover{
        transform: scale3d(1.1, 1.1, 1.1);
    }

    img{
        width: 300px;
        height: 300px;
        position: relative;
        transition: 0.5s;
    }


</style>