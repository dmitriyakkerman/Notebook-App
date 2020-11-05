export default {
    state: {
        popupForm: {
            type: 'NotePopup'
        }
    },
    getters: {
        popupForm(state) {
            return state.popupForm
        }
    },
    mutations: {
        setPopupComponent(state, closest) {
            if(closest.classList.contains('popup-note')) {
                state.popupForm.type = 'NotePopup';
            }
            if(closest.classList.contains('popup-category')) {
                state.popupForm.type = 'CategoryPopup';
            }
        }
    }
}