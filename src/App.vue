<template>
  <div id="app" class="notebook">

    <div class="notebook__container">
      <Sidebar></Sidebar>
      <div class="notebook-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "./components/Sidebar/Sidebar";

export default {
  name: 'App',
  components: {
    Sidebar
  }
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  .notebook {
    font-family: 'Roboto', sans-serif;

    &__container {
      display: flex;
      justify-content: space-between;
    }

    &-content {
      background: rgba(0,0,0,0.06);
    }
  }

</style>