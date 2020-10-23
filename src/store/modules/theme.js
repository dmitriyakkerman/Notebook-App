export default {
    state: {
        darkTheme: false
    },
    getters: {
        darkTheme(state) {
            return state.darkTheme
        }
    },
    mutations: {
        toggleThemeState(state) {
            state.darkTheme = !state.darkTheme
        }
    }
}