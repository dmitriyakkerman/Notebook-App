import Vue from "vue";
import Vuex from "vuex"

import themeStore from "./modules/theme";
import notesStore from "./modules/notes";
import categoriesStore from "./modules/categories"
import modalStore from "./modules/modal";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        themeStore,
        notesStore,
        categoriesStore,
        modalStore
    }
})