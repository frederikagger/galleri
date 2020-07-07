<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-md-12">
                <transition name="bounceLeft" style="animation-duration: 0.2s" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
        }
    }
</script>

<style>
    body{
        padding: 20px;
    }


</style>
