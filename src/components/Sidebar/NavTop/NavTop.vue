<template>
    <div class="nav-top">
        <button class="nav-top__btn j-popup" title="Add note">
            <i></i>
        </button>
        <button class="nav-top__btn j-popup" title="Add category">
            <i></i>
        </button>
    </div>
</template>

<script>

    export default {
        mounted() {
            new window.ArmUI.Popup({
                el: '.popup',
                openers: '.j-popup',
                closable: true
            });
        }
    }

</script>