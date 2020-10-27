export default {
    state: {
        categories: [
            {
                id: 3, title: 'Personal'
            },
            {
                id: 4, title: 'Work'
            }
        ],
        categoriesTrash: []
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
        },
        categoriesTrash(state) {
            return state.categoriesTrash
        }
    },
    actions: {
        postCategory({commit}, newCategory) {
            commit('addCategory', newCategory)
        },
        deleteCategory({commit}, id) {
            commit('removeCategory', id)
        },
        moveCategoryToTrash({commit}, id) {
            commit('trashCategory', id)
        },
        moveCategoryFromTrash({commit}, note) {
            commit('moveCategoryFromTrash', note)
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
        },
        trashCategory(state, id) {
            let category = state.categories.find(function (category) {
                return category.id === id
            });

            state.categoriesTrash.push(category)
        },
        moveCategoryFromTrash(state, category) {
            state.categoriesTrash = state.categoriesTrash.filter(function (item) {
                if(item.id !== category.id) {
                    return item
                }
                else {
                    state.categories.push(category)
                }
            })
        }
    }
}