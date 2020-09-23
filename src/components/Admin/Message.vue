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
