<template>
  <div id="app" class="notebook" :class="{'dark-theme': darkTheme}">

    <div class="notebook__container">
      <Sidebar></Sidebar>
      <Notesbar></Notesbar>
      <div class="notebook-content">
        <router-view></router-view>
      </div>
    </div>

    <Popup></Popup>

  </div>
</template>

<script>

import Sidebar from "./components/Sidebar/Sidebar";
import Notesbar from "./components/Notesbar/Notesbar";
import Popup from "./components/Popup";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Sidebar,
    Notesbar,
    Popup
  },
  computed: {
    ...mapGetters(['darkTheme'])
  }
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

</style>