import Vue from "vue";
import Vuex from "vuex"

import themeStore from "./modules/theme";
import notesStore from "./modules/notes";
import categoriesStore from "./modules/categories"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        themeStore,
        notesStore,
        categoriesStore
    }
})