import { createRouter, createWebHistory } from 'vue-router'
import LifeCycleView from "@/view/LifeCycleView.vue";
import EmitView from "@/view/EmitView.vue";
import HomeView from "@/view/HomeView.vue";

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/lifeCycle', name: 'lifeCycle', component: LifeCycleView },
    { path: '/emit', name: 'emit', component: EmitView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
