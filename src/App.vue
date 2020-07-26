<template>
    <div class="app">
        <app-header/>
        <div class="container my-5">
            <div class="row">
                <div class="col-md-12">
                    <transition name="bounceLeft" style="animation-duration: 0.2s" mode="out-in">
                        <router-view/>
                    </transition>
                </div>
            </div>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Header from "./components/Header";

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
        },
    }
</script>

<style>
    .app{
        font-family: 'Playfair Display', serif;
    }

</style>
