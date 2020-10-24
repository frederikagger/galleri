<template>
  <div class="app">
    <app-header />
    <div class="container my-5">
      <transition
        name="bounceLeft"
        style="animation-duration: 0.100ms"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  created() {
    this.$store.dispatch("bindPaintings");
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
  font-family: sans-serif;
  font-size: 22px;
  color: black;
  background-repeat: no-repeat;
  background-position: left bottom;
}

/* Desktop */
@media screen and (min-width: 1024px) {
  .app {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
      url("https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2Fbackground.webp?alt=media&token=dd82e3f0-5f41-4e01-a077-d30de2679842");
    background-attachment: fixed;
    background-size: cover;
  }
  .form {
    width: 650px;
  }
}

/* Tablets */
@media screen and (min-width: 481px) and (max-width: 1023px) {
  .app {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
      url("https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2Fbackground.webp?alt=media&token=dd82e3f0-5f41-4e01-a077-d30de2679842");
    background-size: cover;
  }
}

/* Mobile */
@media screen and (max-width: 481px) {
  .app {
    background-color: #33353d;
  }
  .form {
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
  line-height: 150%;
}

@keyframes bounceInLeft {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
  to {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.bounceInLeft,
.bounceLeft-enter-active,
.bounceLeft-leave-active,
.bounceOutLeft {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.bounceInLeft,
.bounceLeft-enter-active {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
.bounceLeft-leave-active,
.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}

/* makes all navbar links white */
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 255);
}
.home {
  font-size: 120px;
  font-family: "Playfair Display", serif;
}

@media only screen and (max-width: 767px) {
  .home {
    font-size: 100px;
  }
}
</style>
