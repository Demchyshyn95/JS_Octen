import {BTN_ADD_NEW, GET_TODOS, REMOVE_EL, REMOVE_STATE_EL, SET_EL, SET_ELEMENTS} from "@/store/List/type";
import axios from 'axios'


export const actions = {
    [BTN_ADD_NEW]: async ({commit}, todo) => {
        try {
            const {data: {name}} = await axios.post(`https://htpp-less3-api.firebaseio.com/todolist.json`, todo);
            const el = {
                ...todo, id: name
            }
            commit(SET_EL, el)
        } catch (e) {
            console.log(e);
        }
    },
    [GET_TODOS]: async ({commit}) => {
        try {
            const todos = [];
            const {data} = await axios.get('https://htpp-less3-api.firebaseio.com/todolist.json')
            for (let el in data) {
                todos.push({...data[el], id: el})
            }
            commit(SET_ELEMENTS, todos)
        } catch (e) {
            console.log(e);
        }
    },
    [REMOVE_EL]: async ({commit}, id) => {
        try {
            await axios.delete(`https://htpp-less3-api.firebaseio.com/todolist/${id}.json`)
            commit(REMOVE_STATE_EL, id)
        } catch (e) {
            console.log(e);
        }
    }
}