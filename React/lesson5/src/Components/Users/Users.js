import React, {Component, useEffect, useState} from 'react';
import {UsersService} from "../../Services/UsersService";

function Users(props) {
    const [users, setUsers] = useState();
    const userService = new UsersService();

    useEffect(getUsers)

    async function getUsers() {
        const rezult = await userService.getUsers();
        setUsers(rezult);
    }

    let showMe = (id) => {
        props.history.push({
            pathname: `/Users/${id}`
        })
    };

    return (
        <div>
            {
                users && users.map(user =>
                    (
                        <div key={user.id}>
                            <p><h2>{user.name}</h2></p>
                            <p>phone:<em>{user.phone}</em></p>
                            <p>website:<em>{user.website}</em></p>
                            <button className='btn-success' onClick={() => showMe(user.id)}>Show me</button>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default Users;
