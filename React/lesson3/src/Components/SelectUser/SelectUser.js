import React from 'react';
import {UserService} from "../../Services/userService";
import User from "../User/User";

export default class SelectUser extends React.Component {
    constructor() {
        super();
        this.name = React.createRef()
    }

    state = {
        users: []
    };

    userService = new UserService();

    onChangeInput = () => {
        const name = this.name.current.value;
        name === '' ? this.setState({
            users: []
        }) : this.getUsers(name)
    }

    async getUsers(name) {
        this.setState({
            users: await this.userService.getUsers(name)
        })
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" id="usr" placeholder='Enter User name...'
                           ref={this.name} onChange={this.onChangeInput}/>
                </div>

                <div>
                    {
                        users.map(user =>
                            <User user={user} key={user.id} key={user.id}/>
                        )
                    }
                </div>
            </div>
        );
    }
}
