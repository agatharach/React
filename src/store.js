import createStore from "unistore";

export const store = createStore({
    username: "",
    password: "",
    status: false,
    listNews: [],
    listTop: [],
    value: "",
    val: ""
});

export const actions = store => ({
    login(state) {
        return { status: true };
    },

    logout(state) {
        return { status: false };
    },

    increment(state) {
        return { count: state.count + 1 };
    },

    setuserName(state, name) {
        return { username: name };
    },

    setpassWord(state, password) {
        return { password: password };
    },

    setlistNews(state, news) {
        return { listNews: news };
    },

    setlistTop(state, news) {
        return { listTop: news };
    },

    setValue(state, value) {
        return { value: value };
    },

    setVal(state, val) {
        return { val: val };
    }
});
