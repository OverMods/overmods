import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import './style.css'
import store from "./store";
import App from './App.vue'
import MainView from "./views/MainView.vue";
import ModListView from "./views/ModListView.vue";

const router = createRouter({
    history: createWebHistory("/overmods"),
    routes: [
        {path: "/", component: MainView},
        {path: "/game/:id/", component: ModListView, props: true}
    ]
});

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');