export default {
    state: {
        darkTheme: JSON.parse(localStorage.getItem('darkTheme')) || false
    },
    getters: {
        darkTheme(state) {
            return state.darkTheme
        }
    },
    mutations: {
        toggleThemeState(state) {
            state.darkTheme = !state.darkTheme;

            localStorage.setItem('darkTheme', JSON.stringify(state.darkTheme))
        }
    }
}