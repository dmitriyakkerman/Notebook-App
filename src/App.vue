<template>
  <div id="app" class="notebook" :class="{'dark-theme': darkTheme}">

    <div class="notebook__container">
      <Header :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar"></Header>
      <Sidebar :class="{active: sidebarOpen}" @closeSidebar="toggleSidebar"></Sidebar>
      <div class="notebook-content">
        <router-view></router-view>
      </div>
    </div>

    <Modal></Modal>

    <transition name="slideDown">
      <ModalMessage v-if="modalMessage.isOpen"></ModalMessage>
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
    Modal: () => import('./components/Modals/Modal.vue'),
    ModalMessage: () => import('./components/Modals/ModalMessage.vue')
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
  computed: {
    ...mapGetters(['darkTheme', 'modalMessage'])
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