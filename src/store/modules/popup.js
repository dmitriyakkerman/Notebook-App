export default {
    state: {
        popupForm: 'NotePopup'
    },
    getters: {
        popupForm(state) {
            return state.popupForm
        }
    },
    mutations: {
        setPopupComponent(state, target) {
            if(target.classList.contains('popup-note')) {
                state.popupForm = 'NotePopup'
            }
            if(target.classList.contains('popup-category')) {
                state.popupForm = 'CategoryPopup'
            }
        }
    }
}