<template>
  <div class="list-group-item list-group-item-action">
    <div class="besked"> {{besked.besked}} </div>
    <div class="navn"> {{besked.navn}} </div>
  </div>
</template>

<script>
export default {
  props: {
    besked: Object
  },
}
</script>

<style scoped>
.msg:hover{
  cursor: pointer;
}
.besked{
  float: left;
}
.navn{
  float: right;
}

</style>