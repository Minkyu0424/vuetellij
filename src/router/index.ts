import { createRouter, createWebHistory } from 'vue-router'
import LifeCycleView from "@/view/LifeCycleView.vue";

const routes = [
    { path: '/lifeCycle', name: 'lifeCycle', component: LifeCycleView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
