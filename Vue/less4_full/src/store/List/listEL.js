import {actions} from "./actions";
import {state} from "./statee";
import {getters} from "./getters";
import {mutations} from "./mutations";

const namespaced = true
export const listElModule = 'listEl';
export const listEl = {
    namespaced,
    actions,
    state,
    getters,
    mutations,
}
