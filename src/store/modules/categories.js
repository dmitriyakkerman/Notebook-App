export default {
    state: {
        categories: [
            {
                id: 3, title: 'Personal'
            },
            {
                id: 4, title: 'Work'
            }
        ]
    },
    getters: {
        categories(state) {
            return state.categories
        }
    },
    actions: {
        postCategory({commit}, newCategory) {
            commit('addCategory', newCategory)
        }
    },
    mutations: {
        addCategory(state, newCategory) {
            state.categories.push(newCategory)
        }
    }
}