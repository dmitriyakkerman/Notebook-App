export default {
    state: {
        notes: JSON.parse(localStorage.getItem('notes')) || [],
        notesTrash: JSON.parse(localStorage.getItem('notesTrash')) || [],
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
        updateEditedNote({commit}, editedNote) {
            commit('updateEditedNote', editedNote)
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
        removeNotesByCategory({commit}, id) {
            commit('removeNotesByCategory', id)
        },
        restoreNotesByCategory({commit}, category) {
            commit('restoreNotesByCategory', category)
        },
        cleanNotesTrash({commit}) {
            commit('cleanNotesTrash')
        }
    },
    mutations: {
        addNote(state, newNote) {
            state.notes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        makeNoteFavourite(state, id) {
            state.notes = state.notes.map(function (note) {
                if(note.id === id) {
                    note.favourite = !note.favourite
                }

                return note;
            });

            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        updateEditedNote(state, editedNote) {
            state.notes = state.notes.map(function (note) {
                if(editedNote.id === note.id) {
                    note = editedNote
                }

                return note;
            });

            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        removeNote(state, id) {
            state.notes = state.notes.filter(function (note) {
                return note.id !== id;
            });

            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        trashNote(state, id) {
            let note = state.notes.find(function (note) {
                return note.id === id
            });

            state.notesTrash.push(note);
            localStorage.setItem('notes', JSON.stringify(state.notes));
            localStorage.setItem('notesTrash', JSON.stringify(state.notesTrash));
        },
        moveNoteFromTrash(state, note) {
          state.notesTrash = state.notesTrash.filter(function (item) {
              if(item.id !== note.id) {
                  return item
              }
              else {
                  state.notes.push(note);
                  localStorage.setItem('notes', JSON.stringify(state.notes));
              }
          });

          localStorage.setItem('notesTrash', JSON.stringify(state.notesTrash));
        },
        removeNotesByCategory(state, id) {
            state.notes = state.notes.filter(function (note) {
               if(note.category.id !== id) {
                   return note
               }
               else {
                   state.notesTrash.push(note);
                   localStorage.setItem('notesTrash', JSON.stringify(state.notesTrash))
               }
            });

            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        restoreNotesByCategory(state, category) {
            state.notesTrash = state.notesTrash.filter(function (note) {
                if(note.category.id !== category.id) {
                    return note
                }
                else {
                    state.notes.push(note);
                    localStorage.setItem('notes', JSON.stringify(state.notes));
                }
            });

            localStorage.setItem('notesTrash', JSON.stringify(state.notesTrash));
        },
        cleanNotesTrash(state) {
            state.notesTrash = [];
            localStorage.setItem('notesTrash', JSON.stringify(state.notesTrash));
        }
    }
}