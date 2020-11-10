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

    <ModalForm></ModalForm>

    <transition name="slideDown">
      <ModalMessage v-if="modalMessage.isOpen"></ModalMessage>
    </transition>

  </div>
</template>

<script>

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ModalForm from "./components/Modal/ModalForm";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Popup: () => import('./components/Popup/Popup.vue'),
    ModalMessage: () => import('./components/Modal/ModalMessage.vue'),
    ModalForm
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