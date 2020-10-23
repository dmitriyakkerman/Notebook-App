<template>
    <div class="notebook-sidebar">
        <MenuTop></MenuTop>
        <MenuMid></MenuMid>
        <MenuBottom></MenuBottom>
        <TimeBar></TimeBar>
    </div>
</template>

<script>

    import MenuTop from "./NavTop/NavTop";
    import MenuMid from "./NavBottom/NavBottom";
    import MenuBottom from "./Categories/Categories";
    import TimeBar from "./Time/Time";

    export default {
        components: {
            MenuTop,
            MenuMid,
            MenuBottom,
            TimeBar
        }
    }

</script>