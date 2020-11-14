import React, {useEffect, useState} from 'react';
import {Route, Switch, withRouter} from "react-router";

import {UsersService} from "../../Services/UsersService";
import MyPosts from "../MyPosts/MyPost";


function User(props) {
    const [user, setUser] = useState();
    const [showPost, setShowPost] = useState(false);
    const userService = new UsersService()

    useEffect(getUserById)

    async function getUserById() {
        const id = props.match.params.id;
        const rezult = await userService.getUserById(id);
        setUser(rezult)
    }

    let changeShow = () => {
        setShowPost(!showPost);
    }
    return (
        <div>
            {
                user && (
                    <div>
                        <div>
                            <p><h2>{user.name}</h2></p>
                            <p>phone:<em>{user.phone}</em></p>
                            <p>website: <em>{user.website}</em></p>
                            <button className='btn-success' onClick={changeShow}>My posts</button>
                        </div>
                        <div>
                            {
                                showPost && (
                                    <MyPosts id={user.id}/>
                                )
                            }
                        </div>

                    </div>

                )
            }
        </div>
    )
}

export default withRouter(User);
