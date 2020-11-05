<template>
    <div class="notebook-header">
        <div class="notebook-header__brand">
            <img src="../../assets/img/logo.svg" alt="">
            <h1>Notebook App</h1>
        </div>
        <div class="notebook-header__toggler header-toggler" @click.prevent="$emit('toggleSidebar')" :class="{ active: sidebarOpen }">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            sidebarOpen: Boolean
        }
    }

</script>