<template>
    <ul class="main-nav">
        <router-link tag="li" to="/" active-class="active" exact="" class="main-nav__item">
            <a href="" class="main-nav__link">About</a>
        </router-link>
        <router-link tag="li" to="/notes" active-class="active" exact="" class="main-nav__item">
            <a href="" class="main-nav__link">Notes</a>
        </router-link>
        <router-link tag="li" to="/categories" active-class="active" exact="" class="main-nav__item">
            <a href="" class="main-nav__link">Categories</a>
        </router-link>
        <router-link tag="li" to="/favourite" active-class="active" exact="" class="main-nav__item">
            <a href="" class="main-nav__link">Favourites</a>
        </router-link>
        <router-link tag="li" to="/trash" active-class="active" class="main-nav__item">
            <a href="" class="main-nav__link">Trash</a>
        </router-link>
    </ul>
</template>

<script>

    export default {

    }

</script>