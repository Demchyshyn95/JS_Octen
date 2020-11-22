import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {userService} from "../../Service";
import {loadUsers, select} from "../../State/actions";
import User from "../User/User";
import './style.css'

const Users = () => {
    const dispatch = useDispatch()
    useEffect(async () => {
        const users = await userService();
        dispatch(loadUsers(users))
    }, []);
    const users = useSelector(({users}) => users);
    const selecteds = useSelector(({selecteds}) => selecteds);
    return (
        <div className="list">
            {
                users && users.map(user => <User user={user} dispatch={dispatch} selecteds={selecteds} key={user.id}/>)
            }
        </div>
    )
}

export default Users;
