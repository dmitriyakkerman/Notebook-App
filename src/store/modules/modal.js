export default {
    state: {
        modalMessage: {
            isOpen: false,
            message: ''
        },
        modalForm: {
            isOpen: false,
            component: 'ModalNote',
            data: {}
        }
    },
    getters: {
        modalMessage(state) {
            return state.modalMessage
        },
        modalForm(state) {
            return state.modalForm
        }
    },
    mutations: {
        toggleModalMessage(state, message) {
            state.modalMessage.isOpen = true;
            state.modalMessage.message = message;

            setTimeout(() => {
                state.modalMessage.isOpen = false;
            }, 3000)
        },
        toggleModalForm(state, data) {
            state.modalForm.isOpen = !state.modalForm.isOpen;
            state.modalForm.component = data.component;
            state.modalForm.data = data.data;
        }
    }
}