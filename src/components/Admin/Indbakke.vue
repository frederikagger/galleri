<template>
  <div id="box" class="container">
    <div class="list-group">
      <router-view/>
      <app-message class="list-group-item list-group-item-action" v-for="besked in this.beskeder"
                   :key="besked.besked" :besked="besked">
      </app-message>
    </div>
    </div>
</template>

<script>
import Message from '@/components/Admin/Message';

export default {
  components: {
    appMessage: Message,
  },
  data() {
    return {
      beskeder: [],
    };
  },
};

</script>

<style scoped>

#box {
  border: solid 1px black;
  box-shadow: 1px 1px 5px black;
  padding: 50px;
  text-align: center;
  min-width: 300px;
  width: 400px;
  background-color: white;
  color: black;
}

</style>
