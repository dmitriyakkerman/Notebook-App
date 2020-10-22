<template>
    <div class="notebook-sidebar">
        <MenuTop></MenuTop>
        <MenuMid></MenuMid>
        <MenuBottom></MenuBottom>
        <TimeBar></TimeBar>
    </div>
</template>

<script>

    import MenuTop from "./MenuTop/MenuTop";
    import MenuMid from "./MenuMid/MenuMid";
    import MenuBottom from "./MenuBottom/MenuBottom";
    import TimeBar from "./TimeBar/TimeBar";

    export default {
        components: {
            MenuTop,
            MenuMid,
            MenuBottom,
            TimeBar
        }
    }

</script>