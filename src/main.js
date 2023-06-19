import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import './style.css'
import App from './App.vue'
import MainView from "./views/MainView.vue";

const router = createRouter({
    history: createWebHistory("/overmods"),
    routes: [
        {path: "/", component: MainView}
    ]
});

createApp(App)
    .use(router)
    .mount('#app');