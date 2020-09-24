<template>
  <div class="container">
    <b-navbar class="my-md-3" toggleable="sm" sticky type="dark">
      <b-navbar-nav>
        <b-nav-item exact-active-class="active link" :to="{name: 'Home'}">
          GERD AGGER
        </b-nav-item>
        <b-navbar-brand>
          <img
              src="https://firebasestorage.googleapis.com/v0/b/gerdagger-72890.appspot.com/o/app%2Flogo.svg?alt=media&token=16fd0dd3-d88c-4e51-b8ec-50f9f9ae9289"
              alt="logo">
        </b-navbar-brand>
      </b-navbar-nav>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon-chevron-bar-up v-if="expanded"></b-icon-chevron-bar-up>
          <b-icon-chevron-bar-down v-else></b-icon-chevron-bar-down>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item class="mx-auto" exact-active-class="active link"
                      :to="{name: 'Galleri', query: {page: Number(1)}}">
            Galleri
          </b-nav-item>
          <b-nav-item class="mx-auto" exact-active-class="active link" :to="{name: 'Om'}">
            Om mig
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-md-5">
          <b-nav-item class="mx-auto" exact-active-class="active link" :to="{name: 'Kontakt'}">
            Kontakt
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style scoped>
img {
  height: 25px;
  width: 25px;
}

.link {
  place-items: center;
  text-decoration: underline;
}

h1 {
  font-size: 110px;
  color: white;
  text-align: center;
}

</style>
