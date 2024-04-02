import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import ErrorPage from '../pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/project/:slug', name: 'project-detail', component: ProjectDetailPage },

        // Pagina di Errore
        { path: '/404', name: '404', component: ErrorPage },
        { path: '/:pathMatch(.*)*', redirect: '/404' },
    ]
});

export { router };