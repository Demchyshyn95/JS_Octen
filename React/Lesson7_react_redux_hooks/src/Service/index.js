import {loadUsers} from "../State/actions";

export const userService = async (dispatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
     dispatch(loadUsers(users));
}
