import {GET_STATE} from "@/store/List/type";

export const getters = {
    [GET_STATE]: (state) => {
        return state.todoList
    }
}