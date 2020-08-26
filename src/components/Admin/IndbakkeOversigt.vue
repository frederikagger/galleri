<template>
  <div>
    <div class="list-group-item list-group-item-action" v-for="besked in this.beskeder"
         :key="besked.besked" :besked="besked">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>