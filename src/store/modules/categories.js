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
        },
        categoryBy(state) {
            return function (id) {
                return state.categories.find(function (category) {
                    return category.id === id
                })
            }
        }
    },
    actions: {
        postCategory({commit}, newCategory) {
            commit('addCategory', newCategory)
        },
        deleteCategory({commit}, id) {
            commit('removeCategory', id)
        }
    },
    mutations: {
        addCategory(state, newCategory) {
            state.categories.push(newCategory)
        },
        removeCategory(state, id) {
            state.categories = state.categories.filter(function (category) {
                return category.id !== id
            })
        }
    }
}