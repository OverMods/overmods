import { createStore } from "vuex";
import { HTTP, getUploadUrl } from "../http.js";
import {relativeDate, renderMarkdown} from "../utils.js";

export default createStore({
    state: {
        gameList: [],
        game: null,
        mods: null,
        mod: {},
        author: {},
        screenshots: [],
        comments: []
    },
    getters: {
        getGameList: (store) => store.gameList,
        getGame: (store) => store.game,
        getMods: (store) => store.mods,
        getMod: (store) => store.mod,
        getAuthor: (store) => store.author,
        getScreenshots: (store) => store.screenshots,
        getComments: (store) => store.comments
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
        },
        async fetchMod({ commit }, id) {
            try {
                const mod = await HTTP.get(`/mod/${id}`);
                if (mod.data.error) {
                    console.log(mod.data.error);
                    return;
                }
                commit("SET_MOD", mod.data);

                const author = await HTTP.get(`/user/${mod.data.author}`);
                if (author.data.error) {
                    console.log(author.data.error);
                    return;
                }
                commit("SET_AUTHOR", author.data);

                const screenshots = await HTTP.get(`/mod/${id}/screenshot`);
                if (screenshots.data.error) {
                    console.log(screenshots.data.error);
                    return;
                }
                commit("SET_SCREENSHOTS", screenshots.data);

                const comments = await HTTP.get(`/mod/${id}/comment`);
                if (comments.data.error) {
                    console.log(comments.data.error);
                    return;
                }
                commit("SET_COMMENTS", comments.data);
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
        },
        SET_MOD(state, mod) {
            state.mod = mod;
            if (mod.logo) {
                state.mod.logo = getUploadUrl(mod.logo);
            }
            if (mod.description) {
                state.mod.descriptionHtml = renderMarkdown(mod.description);
            }
            if (mod.instruction) {
                state.mod.instuctionHtml = renderMarkdown(mod.instruction);
            }
            if (mod.uploadedAt) {
                state.mod.uploadedAt = relativeDate(mod.uploadedAt);
            }
        },
        SET_AUTHOR(state, author) {
            state.author = author;
            if (author.avatar) {
                state.author.avatar = getUploadUrl(state.author.avatar);
            }
        },
        SET_SCREENSHOTS(state, screenshots) {
            state.screenshots = [];
            for (let screenshot of screenshots) {
                screenshot.screenshot = getUploadUrl(screenshot.screenshot);
                state.screenshots.push(screenshot);
            }
        },
        SET_COMMENTS(state, comments) {
            state.comments = [];
            for (let comment of comments) {
                if (comment.user.avatar) {
                    comment.user.avatar = getUploadUrl(comment.user.avatar);
                }
                if (comment.user.registredAt) {
                    comment.user.registredAt = relativeDate(comment.user.registredAt);
                }
                if (comment.comment.commentedAt) {
                    comment.comment.commentedAt = relativeDate(comment.comment.commentedAt);
                }
                state.comments.push(comment);
            }
        }
    }
});