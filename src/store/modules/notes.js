export default {
    state: {
        notes: [
            {
                id: 1, title: 'Note1', text: 'Note1 text', favourite: true, category: {
                    id: 3, title: 'Personal'
                }
            },
            {
                id: 2, title: 'Note2', text: 'Note2 text', favourite: false, category: {
                    id: 4, title: 'Work'
                }
            }
        ]
    },
    getters: {
        notes(state) {
            return state.notes
        },
        noteBy(state) {
            return function (id) {
                return state.notes.find(function (note) {
                    return note.id === id
                })
            }
        },
        favourites(state) {
            return state.notes.filter(function (note) {
                return note.favourite
            })
        }
    },
    actions: {
        postNote({commit}, newNote) {
            commit('addNote', newNote)
        },
        updateFavouriteNote({commit}, id) {
            commit('makeNoteFavourite', id)
        },
        deleteNote({commit}, id) {
            commit('removeNote', id)
        }
    },
    mutations: {
        addNote(state, newNote) {
            state.notes.push(newNote)
        },
        makeNoteFavourite(state, id) {
            state.notes = state.notes.map(function (note) {
                if(note.id === id) {
                    note.favourite = !note.favourite
                }

                return note;
            })
        },
        removeNote(state, id) {
            state.notes = state.notes.filter(function (note) {
                return note.id !== id;
            })
        }
    }
}