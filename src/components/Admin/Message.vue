<template>
  <div class="list-group-item list-group-item-action">
    {{besked.besked}}
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

</style>