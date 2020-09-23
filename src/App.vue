<template>
  <div class="app">
    <app-header/>
    <div class="container my-5">
        <transition name="bounceLeft" style="animation-duration: 0.100ms" mode="out-in">
          <router-view/>
        </transition>
      </div>
    <app-footer/>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  created() {
    this.$store.dispatch('bindPaintings');
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style>

.app {
  padding-top: 20px;
  font-family: Calibri;
  font-size: 22px;
  color: black;
  background-repeat: no-repeat;
  background-position: left bottom;
  min-height: 800px;
}

/* Desktop */
@media screen and (min-width: 1024px) {
  .app {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url("https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2Fbackground.webp?alt=media&token=dd82e3f0-5f41-4e01-a077-d30de2679842");
    background-attachment: fixed;
    background-size: cover;
  }
  .form{
    width: 450px;
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
    background-position: top;
  }
  .form{
    width: 350px;
  }
}

.form {
  border: solid 1px black;
  box-shadow: 1px 1px 5px black;
  padding: 35px;
  text-align: justify;
  min-width: 300px;
  min-height: 425px;
  background-color: white;
  color: black;
}


/* makes all navbar links white */
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 255);
}

</style>
