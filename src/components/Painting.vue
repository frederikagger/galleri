<template>
    <div id="card" class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div class="card">
            <h4 class="card-header">
                <small> {{painting.description}} </small>
            </h4>
            <div class="card-body">
                <a v-bind:href="painting.url">
                    <img :src="painting.url" class="img-fluid">
                </a>
                <hr>
                <div class="navbar justify-content-between">
                    <p id="pris" class="navbar-text">Pris: {{painting.price | currency}}</p>
                    <p id="status" class="navbar-text">{{painting.status}}</p>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['painting'],
    }
</script>

<style scoped>
    .card {
        border: 1px black;
        box-shadow: 1px 1px 5px black;
        transition: 0.5s;
        text-align: center;
    }

    #card {
        padding: 20px;
    }

    #pris {
        text-align: left;
    }

    #status {
        color: red;
        text-align: right;
    }

    img {
        width: 325px;
        height: 320px;
        position: relative;
    }

</style>