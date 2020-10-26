<template>
    <div class="notebook-sidebar">
        <MenuTop></MenuTop>
        <MainNav></MainNav>
        <NavBottom></NavBottom>
    </div>
</template>

<script>

    import MenuTop from "./NavTop/NavTop";
    import MainNav from "./MainNav/MainNav";
    import NavBottom from "./NavBottom/NavBottom";

    export default {
        components: {
            MenuTop,
            MainNav,
            NavBottom
        }
    }

</script>