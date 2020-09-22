<template>
    <div class="container my-5 text-white">
      <link rel="stylesheet" type="text/css" href="glider.css">
        <div class="my-md-5">
            <br>
            <br><br><br><br><br>
            <h1> Gerd Agger <br> kunst galleri </h1>
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </div>
      <div class="bg-white my-5 row">
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
      computed: {
        ...mapGetters([
            'paintings'
        ]),
        promotedPaintings: function() {
          return this.paintings.slice(0,3);
        }
      }
    }
</script>

<style scoped>
    h1{
        font-size: 120px;
        font-family: 'Playfair Display', serif;
    }

    @media only screen and (max-width: 767px) {
        h1{
            font-size: 100px;
        }
    }
</style>
