<template>
  <div id="app" class="notebook" :class="{'dark-theme': darkTheme}">

    <transition name="appear">
    <PageLoader v-if="loaded === false"></PageLoader>
    </transition>

    <transition name="fadeIn">
        <div class="notebook__container" v-if="loaded">
          <Header :sidebarOpen="sidebarOpen" @toggleSidebar="toggleSidebar"></Header>
          <Sidebar :class="{active: sidebarOpen}" @closeSidebar="toggleSidebar"></Sidebar>
          <div class="notebook-content">
            <router-view></router-view>
          </div>
        </div>
    </transition>

    <Modal></Modal>

    <transition name="slideDown">
      <ModalMessage v-if="modalMessage.isOpen"></ModalMessage>
    </transition>

  </div>
</template>

<script>

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import PageLoader from "./components/Loaders/PageLoader";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    PageLoader,
    Modal: () => import('./components/Modals/Modal.vue'),
    ModalMessage: () => import('./components/Modals/ModalMessage.vue')
  },
  data() {
    return {
      loaded: false,
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
  },
  mounted() {
    let that = this;
    setTimeout(() => {
      that.loaded = true
    }, 1000)
  }
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

</style>