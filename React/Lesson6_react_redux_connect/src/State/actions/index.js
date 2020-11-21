import {LOADING_USERS, SELECT} from "../actions_type";

export const loadUsers = (payload) => ({type:LOADING_USERS,payload});
export const select = (payload) => ({type:SELECT,payload});
