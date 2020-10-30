<template>
  <div id="app" class="notebook" :class="{'dark-theme': darkTheme}">

    <div class="notebook__container">
      <Sidebar></Sidebar>
      <div class="notebook-content">
        <router-view></router-view>
      </div>
    </div>

    <Popup></Popup>

    <transition name="slideDown">
      <Modal v-if="modalOpen">111</Modal>
    </transition>

  </div>
</template>

<script>

import Sidebar from "./components/Sidebar/Sidebar";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Sidebar,
    Popup: () => import('./components/Popup/Popup.vue'),
    Modal: () => import('./components/Modal/Modal.vue')
  },
  computed: {
    ...mapGetters(['darkTheme', 'modalOpen'])
  },
  mounted() {
    document.title = 'Notebook App'
  }
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

</style>