import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {userService} from "../../Service";
import {loadUsers, select} from "../../State/actions";
import User from "../User/User";
import './style.css'

const Users = ({users, loadUsers, select, selecteds}) => {

    useEffect(async () => {
        const users = await userService();
        loadUsers(users);
    }, [])

    return (
        <div className="list">
            {
                users && users.map(user => <User user={user} select={select} selecteds={selecteds} key={user.id}/>)
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, {
    loadUsers,
    select
})(Users);
