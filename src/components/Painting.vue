<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <b-card class="card"
                :img-src="painting.url"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 320px;"
        >
            <b-card-text class="navbar justify-content-between">
                    <p id="pris" class="navbar-text">Mål: {{painting.mål}}</p>
                    <p id="status" class="navbar-text">{{painting.solgt == 'true' ? "Solgt" : "Til salg"}}</p>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: ['painting'],
    }
</script>

<style scoped>
    div{
        text-align: center;
        padding: 20px;
    }

    .card{
        border: 1px black;
        box-shadow: 1px 1px 5px black;
    }
    img{
        place-items: center;
        position: relative;
        place-items: center;
        max-width: 320px;
        max-height: 300px;
    }
</style>