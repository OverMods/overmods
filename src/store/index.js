import { createStore } from "vuex";
import { HTTP, getUploadUrl } from "../http.js";

export default createStore({
    state: {
        gameList: []
    },
    getters: {
        getGameList: (store) => store.gameList
    },
    actions: {
        async fetchGameList({ commit }) {
            try {
                const res = await HTTP.get("/game");
                commit("SET_GAME_LIST", res.data);
            } catch (e) {
                console.log(e);
            }
        }
    },
    mutations: {
        SET_GAME_LIST(state, gameList) {
            state.gameList = [];
            for (let game of gameList) {
                state.gameList.push({
                    id: game.id,
                    title: game.title,
                    logo: getUploadUrl(game.logo)
                });
            }
        }
    }
});