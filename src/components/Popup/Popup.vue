<template>
    <div class="popup">
        <div>
            <component :is="popupType"></component>
        </div>
    </div>
</template>

<script>

    import NotePopup from "./NotePopup";
    import CategoryPopup from "./CategoryPopup";

    import {mapGetters} from 'vuex'

    export default {
        components: {
            NotePopup,
            CategoryPopup
        },
        computed: {
            ...mapGetters(['popupType'])
        },
        mounted() {
            let popup = new window.ArmUI.Popup({
                el: '.popup',
                openers: '.j-popup',
                closable: true
            });

            window.popup = popup;
        }
    }

</script>