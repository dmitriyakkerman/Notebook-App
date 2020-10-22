<template>
    <div class="notebook__menu-bottom menu-bottom">
        <div class="menu-bottom__title">Categories</div>
        <ul class="menu-categories">
            <router-link tag="li" to="/goals">
                <a href="">Goals</a>
            </router-link>
            <router-link tag="li" to="/health">
                <a href="">Health</a>
            </router-link>
            <router-link tag="li" to="/development">
                <a href="">Development</a>
            </router-link>
            <router-link tag="li" to="/personal">
                <a href="">Personal</a>
            </router-link>
            <router-link tag="li" to="/recipes">
                <a href="">Recipes</a>
            </router-link>
        </ul>
        <a href="" class="menu-bottom__add-category">Add Category</a>
    </div>
</template>

<script>

    export default {

    }

</script>