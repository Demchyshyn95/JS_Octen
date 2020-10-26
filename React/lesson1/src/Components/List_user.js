import React, {Component} from 'react';
import {userList} from "./State";
import User from "./User";

class ListUser extends Component {
    render() {
        return(
                <div>
                    {
                        userList.map((user, id= user.id) => {
                            return (
                                <User user={user} key={id}/>
                            )
                        })
                    }
                </div>
            )
    }
}

export default ListUser;
