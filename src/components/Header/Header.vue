<template>
    <div class="notebook-header">
        <div class="notebook-header__toggler header-toggler" @click.prevent="$emit('toggleSidebar')" :class="{ active: sidebarOpen }">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['sidebarOpen']
    }

</script>