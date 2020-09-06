import {REMOVE_STATE_EL, SET_EL, SET_ELEMENTS} from "@/store/List/type";

export const mutations = {
    [SET_EL]: (state, el) => {
        state.todoList.push(el)
    },
    [SET_ELEMENTS]: (state, todos) => {
        state.todoList = todos
    },
    [REMOVE_STATE_EL]: (state, id) => {
        state.todoList = state.todoList.filter(el => el.id !== id)
    }
}