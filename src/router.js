import Vue from "vue";
import VueRouter from "vue-router";

import Notes from "./views/Notes";
import Categories from "./views/Categories";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/About.vue')
        },
        {
            path: '/notes',
            component: Notes
        },
        {
            path: '/categories',
            component: Categories
        },
        {
            path: '/notes/:id',
            component: () => import('./views/Note.vue')
        },
        {
            path: '/categories/:id',
            component: () => import('./views/Category.vue')
        },
        {
            path: '/favourite',
            component: () => import('./views/Favourite.vue')
        },
        {
            path: '/trash',
            component: () => import('./views/Trash.vue')
        },

    ]
})