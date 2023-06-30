import { createStore } from "vuex";
import { HTTP, getUploadUrl } from "../http.js";
import {relativeDate, renderMarkdown} from "../utils.js";

export default createStore({
    state: {
        errors: {},
        gameList: [],
        stats: {},
        trends: [],
        game: null,
        mods: null,
        mod: {},
        author: {},
        screenshots: [],
        comments: [],
        ratings: {},
        user: null,
        panels: {}
    },
    getters: {
        getError: (store) => (name) => store.errors[name],
        getGameList: (store) => store.gameList,
        getGameById: (store) => (id) => store.gameList.find(g => g.id === id),
        getStats: (store) => store.stats,
        getTrends: (store) => store.trends,
        getGame: (store) => store.game,
        getMods: (store) => store.mods,
        getMod: (store) => store.mod,
        getAuthor: (store) => store.author,
        getScreenshots: (store) => store.screenshots,
        getComments: (store) => store.comments,
        getRatings: (store) => store.ratings,
        getUser: (store) => store.user,
        isLoggedIn: (store) => store.user !== null,
        getShowPanel: (store) => (panel) => store.panels[panel] || false
    },
    actions: {
        async fetchGameList({ commit }) {
            try {
                const res = await HTTP.get("/game");
                commit("SET_GAME_LIST", res.data);
            } catch (e) {
                commit("SET_ERROR", {name: "gameList", error: e});
            }
        },
        async fetchStats({ commit }) {
            try {
                const res = await HTTP.get("/trends/stats");
                commit("SET_STATS", res.data);

                commit("SET_NO_ERROR", "stats");
            } catch (e) {
                commit("SET_ERROR", {name: "stats", error: e});
            }
        },
        async fetchTrends({ commit }) {
            try {
                const res = await HTTP.get("/trends/mods");
                commit("SET_TRENDS", res.data);

                commit("SET_NO_ERROR", "trends");
            } catch (e) {
                commit("SET_ERROR", {name: "trends", error: e});
            }
        },
        async fetchModList({ commit }, shortName) {
            try {
                const res = await HTTP.get(`/game/${shortName}`);
                if (res.data.error) {
                    commit("SET_ERROR", {name: "modList", error: res.data.error});
                    return;
                }

                commit("SET_GAME", res.data.game);
                commit("SET_MODS", res.data.mods);

                commit("SET_NO_ERROR", "modList");
            } catch (e) {
                console.log(e);
            }
        },
        async fetchMod({ commit }, id) {
            try {
                const mod = await HTTP.get(`/mod/${id}`);
                if (mod.data.error) {
                    commit("SET_ERROR", {name: "mod", error: mod.data.error});
                    return;
                }
                commit("SET_MOD", mod.data);

                const author = await HTTP.get(`/user/${mod.data.author}`);
                if (author.data.error) {
                    commit("SET_ERROR", {name: "mod", error: author.data.error});
                    return;
                }
                commit("SET_AUTHOR", author.data);

                const screenshots = await HTTP.get(`/mod/${id}/screenshot`);
                if (screenshots.data.error) {
                    commit("SET_ERROR", {name: "mod", error: screenshots.data.error});
                    return;
                }
                commit("SET_SCREENSHOTS", screenshots.data);

                const comments = await HTTP.get(`/mod/${id}/comment`);
                if (comments.data.error) {
                    commit("SET_ERROR", {name: "mod", error: comments.data.error});
                    return;
                }
                commit("SET_COMMENTS", comments.data);

                const ratings = await HTTP.get(`/mod/${id}/rating`);
                if (ratings.data.error) {
                    commit("SET_ERROR", {name: "mod", error: ratings.data.error});
                    return;
                }
                commit("SET_RATINGS", ratings.data);

                commit("SET_NO_ERROR", "mod");
            } catch (e) {
                console.log(e);
            }
        },
        async fetchLogin({ commit }) {
            try {
                const res = await HTTP.get("/login");
                if (res.data.error) {
                    commit("SET_ERROR", {name: "login", error: res.data.error});
                    return;
                }

                commit("SET_USER", res.data);

                commit("SET_NO_ERROR", "login");
            } catch (e) {
                console.log(e);
            }
        },
        async setShowPanel({ commit }, {panel, show}) {
            commit("SET_SHOW_PANEL", {panel, show});
        },
        async postLogin({ commit }, {username, password}) {
            try {
                const res = await HTTP.post("/login", {username, password});
                if (res.data.error) {
                    commit("SET_ERROR", {name: "login", error: res.data.error});
                    return;
                }

                commit("SET_USER", res.data);

                commit("SET_NO_ERROR", "login");
            } catch (e) {
                console.log(e);
            }
        },
        async postSignup({ commit }, {username, email, password}) {
            try {
                const res = await HTTP.post("/signup", {username, email, password});
                if (res.data.error) {
                    commit("SET_ERROR", {name: "signup", error: res.data.error});
                    return;
                }

                commit("SET_USER", res.data);

                commit("SET_NO_ERROR", "signup");
            } catch (e) {
                console.log(e);
            }
        },
        async logout({ commit }) {
            try {
                await HTTP.delete("/login");
                commit("SET_USER", null);
            } catch (e) {
                console.log(e);
            }
        },
        async postComment({ commit, state }, comment) {
            try {
                const res = await HTTP.post(`/mod/${state.mod.id}/comment`, {
                    mod: state.mod.id,
                    comment: comment
                });
                if (res.data.error) {
                    commit("SET_ERROR", {name: "comment", error: res.data.error});
                } else {
                    commit("ADD_MY_COMMENT", comment);
                    commit("SET_NO_ERROR", "comment");
                }
            } catch (e) {
                console.log(e);
            }
        },
        async postRating({ commit, state}, rating) {
            try {
                const res = await HTTP.put(`/mod/${state.mod.id}/rating`, {
                    mod: state.mod.id,
                    rating: rating
                });
                if (res.data.error) {
                    commit("SET_ERROR", {name: "rating", error: res.data.error});
                } else {
                    state.ratings[state.user.id] = rating;
                    commit("SET_NO_ERROR", "rating");
                }
            } catch (e) {
                console.log(e);
            }
        }
    },
    mutations: {
        SET_ERROR(state, {name, error}) {
            state.errors[name] = error;
            console.log(error);
        },
        SET_NO_ERROR(state, name) {
            state.errors[name] = null;
        },
        SET_GAME_LIST(state, gameList) {
            state.gameList = [];
            for (let game of gameList) {
                state.gameList.push({
                    id: game.id,
                    title: game.title,
                    shortTitle: game.title.replace(/[:\s]/g, '').length > 13
                        ? game.title.substring(0,13) + "..."
                        : game.title,
                    shortName: game.shortName,
                    logo: getUploadUrl(game.logo)
                });
            }
        },
        SET_STATS(state, stats) {
            state.stats = stats;
        },
        SET_TRENDS(state, trends) {
            state.trends = [];
            for (let trend of trends) {
                if (trend.mod.logo) {
                    trend.mod.logo = getUploadUrl(trend.mod.logo);
                }
                state.trends.push(trend);
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
        },
        SET_RATINGS(state, ratings) {
            state.ratings = {};
            for (let _rating of ratings) {
                state.ratings[_rating.user] = _rating.rating;
            }
            console.log(state.ratings);
        },
        ADD_MY_COMMENT(state, data) {
            state.comments.push({
                user: state.user,
                comment: {
                    mod: state.mod.id,
                    user: state.user.id,
                    comment: data.comment
                }
            });
        },
        SET_USER(state, user) {
            state.user = user;
            if (user?.avatar) {
                state.user.avatar = getUploadUrl(user.avatar);
            }
            console.log(state.user);
        },
        SET_SHOW_PANEL(state, {panel, show}) {
            state.panels[panel] = show;
            console.log(state.panels);
        }
    }
});