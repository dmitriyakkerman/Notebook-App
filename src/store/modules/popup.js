export default {
    state: {
        popupForm: {
            type: 'NotePopup'
        }
    },
    getters: {
        popupType(state) {
            return state.popupForm.type
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