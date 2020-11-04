<template>
  <div id="app" class="notebook" :class="{'dark-theme': darkTheme}">

    <div class="notebook__container">
      <Header :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar"></Header>
      <Sidebar :class="{active: sidebarOpen}" @closeSidebar="toggleSidebar"></Sidebar>
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

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Popup: () => import('./components/Popup/Popup.vue'),
    Modal: () => import('./components/Modal/Modal.vue')
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  computed: {
    ...mapGetters(['darkTheme', 'modalOpen'])
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

</style>