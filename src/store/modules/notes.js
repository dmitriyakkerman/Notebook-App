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
        notesTrash: []
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
        notesTrash(state) {
            return state.notesTrash
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
        moveNoteToTrash({commit}, id) {
            commit('trashNote', id)
        },
        moveNoteFromTrash({commit}, note) {
            commit('moveNoteFromTrash', note)
        },
        restoreNotesByCategory({commit}, category) {
            commit('restoreNotesByCategory', category)
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

            state.notesTrash.push(note)
        },
        moveNoteFromTrash(state, note) {
          state.notesTrash = state.notesTrash.filter(function (item) {
              if(item.id !== note.id) {
                  return item
              }
              else {
                  state.notes.push(note)
              }
          })
        },
        removeNotesByCategory(state, id) {
            state.notes = state.notes.filter(function (note) {
               if(note.category.id !== id) {
                   return note
               }
               else {
                   state.notesTrash.push(note)
               }
            })
        },
        restoreNotesByCategory(state, category) {
            state.notesTrash = state.notesTrash.filter(function (note) {
                if(note.category.id !== category.id) {
                    return note
                }
                else {
                    state.notes.push(note)
                }
            })
        },
    }
}