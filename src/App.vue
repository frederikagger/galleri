<template>
    <div class="app">
        <app-header/>
        <div class="container my-5">
            <div class="row">
                <div class="col-md-12">
                    <transition name="bounceLeft" style="animation-duration: 0.100ms" mode="out-in">
                        <router-view/>
                    </transition>
                </div>
            </div>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import Header from "./components/Header";

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
        },
        metaInfo: {
          title: 'Gerd Agger kunst galleri'
        },
    }
</script>

<style>

    .app {
        padding-top: 20px;
        font-family: Calibri;
        font-size: 18px;
        color: black;
        background-repeat: no-repeat;
        background-position: left bottom;
        min-height: 800px;
    }
    /* Desktop */
    @media screen and (min-width: 1024px) {
        .app{
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2Fbackground.webp?alt=media&token=dd82e3f0-5f41-4e01-a077-d30de2679842");
            background-size: cover;
            background-attachment: fixed;
        }
    }

    /* Tablets */
    @media screen and (min-width: 481px) and (max-width: 1023px) {
        .app {
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2Fbackground.webp?alt=media&token=dd82e3f0-5f41-4e01-a077-d30de2679842");
            background-size: cover;
        }
    }

    /* Mobile */
    @media screen and (max-width: 481px) {
        .app {
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2FWebp.net-resizeimage%20(1).jpg?alt=media&token=edacdc01-1ecf-4ee6-9514-04e2f1b6cc4e");
            background-size: cover;
        }
    }

    /* class to apply to headers */
    .headers {
        font-family: 'Playfair Display', serif;
        text-align: center;
    }

    form {
        border: solid 1px black;
        box-shadow: 1px 1px 5px black;
        padding: 50px;
        text-align: start;
        width: 400px;
        min-width: 300px;
        background-color: white;
        color: black;
    }

    /* makes all navbar links white */
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(255, 255, 255, 255);
    }

</style>
