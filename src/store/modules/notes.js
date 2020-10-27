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
        ],
        trash: []
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
        notesBy(state) {
          return function (id) {
              return state.notes.filter(function (note) {
                  return note.category.id === id
              })
          }
        },
        favourite(state) {
            return state.notes.filter(function (note) {
                return note.favourite
            })
        },
        trash(state) {
            return state.trash
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
        },
        moveToTrash({commit}, id) {
            commit('trashNote', id)
        },
        moveFromTrash({commit}, note) {
            commit('moveFromTrash', note)
        },
        restoreNote({commit}, note) {
            commit('restoreNote', note)
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
        },
        trashNote(state, id) {
            let note = state.notes.find(function (note) {
                return note.id === id
            });

            state.trash.push(note)
        },
        moveFromTrash(state, note) {
          state.trash = state.trash.filter(function (item) {
              if(item.id !== note.id) {
                  return item
              }
          })
        },
        removeNotesByCategory(state, id) {
            state.notes = state.notes.filter(function (note) {
               if(note.category.id !== id) {
                   return note
               }
            })
        },
        restoreNote(state, note) {
            state.notes.push(note)
        }
    }
}