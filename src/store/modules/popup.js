export default {
    state: {
        popupForm: {
            type: 'NotePopup',
            data: {}
        }
    },
    getters: {
        popupForm(state) {
            return state.popupForm
        },
        popupData(state) {
            return state.popupForm.data
        }
    },
    mutations: {
        setPopupComponent(state, data = null) {
            if(data.closest.classList.contains('popup-note')) {
                state.popupForm.type = 'NotePopup';
                state.popupForm.data = data.note;
            }
            if(data.closest.classList.contains('popup-category')) {
                state.popupForm.type = 'CategoryPopup';
                state.popupForm.data = data.note;
            }
        }
    }
}