import React, {Component} from 'react';
import User from "../User/User";
import {UserService} from "../../services/userService";
import s from './UserList.module.css'
import FullUser from "../FullUser/FullUser";

class UserList extends Component {
    state = {
        users: [],
        show: false,
        newUser:{},
    };
    api = new UserService();


    async componentDidMount() {
        this.setState({users: await this.api.getUsers()})
    }

    showUser = (user) => {
        this.setState({
            newUser: user
        })
        console.log(this.state.newUser)

                this.isShow()
    }
    isShow = () => {
        this.setState({
            show: !this.state.show
        })
    }


    render() {

        return (
            <div>
                <h2>Users</h2>
                <div className="card-group">{
                    this.state.users.map(user => <User user={user} key={user.id} showUser={this.showUser}/>)
                }
                </div>
                <div>
                    {
                        this.state.show ? <FullUser changeShow={this.isShow} user={this.state.newUser}/> : ('')
                    }
                </div>
            </div>


        );
    }
}

export default UserList;
