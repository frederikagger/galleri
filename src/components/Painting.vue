<template>
    <div id="card" class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div class="card" :class="{solgt: painting.solgt=='true', tilSalg: painting.solgt=='false'}">
            <div class="card-body">
                <a v-bind:href="painting.url">
                    <img :src="painting.url" class="img-fluid">
                </a>
                <hr>
                <div class="navbar justify-content-between">
                    <p id="pris" class="navbar-text">Mål: {{painting.mål}}</p>
                    <p id="status" class="navbar-text">{{painting.solgt}}</p>
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
        text-align: center;
    }

    #card {
        padding: 30px;
    }

    #pris {
        text-align: left;
    }

    .solgt{
        border: 1px red solid;
        box-shadow: 1px 1px 5px red;
    }

    .tilSalg{
        border: 1px green solid;
        box-shadow: 1px 1px 5px green;
    }

    #status {
        text-align: right;
    }

    img {
        width: auto;
        height: auto;
        position: relative;
        place-items: center;
    }

</style>