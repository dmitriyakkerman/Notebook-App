export default {
    state: {
        modal: {
            isOpen: false,
            message: ''
        }
    },
    getters: {
        modalOpen(state) {
            return state.modal.isOpen
        },
        modalMessage(state) {
            return state.modal.message
        }
    },
    mutations: {
        toggleModal(state) {
            state.modal.isOpen = true;

            setTimeout(() => {
                state.modal.isOpen = false;
            }, 3000)
        },
        setModalMessage(state, message) {
            state.modal.message = message
        }
    }
}