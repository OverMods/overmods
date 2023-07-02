import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router";
import './style.css'
import './animations.css'
import store from "./store";
import App from './App.vue'
import MainView from "./views/MainView.vue";
import ModListView from "./views/ModListView.vue";
import ModView from "./views/ModView.vue";

const router = createRouter({
    history: createWebHistory("/overmods"),
    routes: [
        {path: "/", name: 'MainView', component: MainView},
        {path: "/game/:shortName/",  name: 'ModListView', component: ModListView, props: true},
        {path: "/game/:shortName/mod/:id/", name: 'ModView', component: ModView, props: true}
    ]
});

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');