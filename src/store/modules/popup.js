export default {
    state: {
        popupForm: {
            type: 'NotePopup',
            data: null
        }
    },
    getters: {
        popupForm(state) {
            return state.popupForm
        }
    },
    mutations: {
        setPopupComponent(state, target, data = null) {
            if(target.classList.contains('popup-note')) {
                state.popupForm.type = 'NotePopup';
                state.popupForm.data = data
            }
            if(target.classList.contains('popup-category')) {
                state.popupForm.type = 'CategoryPopup';
                state.popupForm.data = data
            }
        }
    }
}