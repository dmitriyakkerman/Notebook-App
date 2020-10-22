<template>
    <ul class="notebook__menu-mid menu-mid">
        <router-link tag="li" to="/" active-class="active" exact="">
            <a href="">All Notes</a>
        </router-link>
        <router-link tag="li" to="/trash">
            <a href="">Trash</a>
        </router-link>
    </ul>
</template>

<script>

    export default {

    }

</script>