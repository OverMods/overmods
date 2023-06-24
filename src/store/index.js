import { createStore } from "vuex";
import { HTTP, getUploadUrl } from "../http.js";
import { renderMarkdown } from "../utils.js";

export default createStore({
    state: {
        gameList: [],
        game: null,
        mods: null
    },
    getters: {
        getGameList: (store) => store.gameList,
        getGame: (store) => store.game,
        getMods: (store) => store.mods
    },
    actions: {
        async fetchGameList({ commit }) {
            try {
                const res = await HTTP.get("/game");
                commit("SET_GAME_LIST", res.data);
            } catch (e) {
                console.log(e);
            }
        },
        async fetchModList({ commit }, id) {
            try {
                const res = await HTTP.get(`/game/${id}`);
                if (res.data.error) {
                    console.log(res.data.error);
                    return;
                }

                commit("SET_GAME", res.data.game);
                commit("SET_MODS", res.data.mods);
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
                    shortTitle: game.title.replace(/[:\s]/g, '').length > 13
                        ? game.title.substring(0,13) + "..."
                        : game.title,
                    logo: getUploadUrl(game.logo)
                });
            }
        },
        SET_GAME(state, game) {
            state.game = game;
        },
        SET_MODS(state, mods) {
            state.mods = [];
            for (let mod of mods) {
                if (mod.logo) {
                    mod.logo = getUploadUrl(mod.logo);
                }
                if (mod.description) {
                    console.log(mod);
                    mod.descriptionHtml = renderMarkdown(mod.description);
                }
                if (mod.instruction) {
                    mod.instuctionHtml = renderMarkdown(mod.instruction);
                }
                state.mods.push(mod);
            }
        }
    }
});