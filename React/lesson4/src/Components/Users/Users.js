import React, {Component} from 'react';
import {UsersService} from "../../Services/UsersService";

class Users extends Component {
    state = {
        users: null
    }
userService = new UsersService();

    componentDidMount() {
        this.getUsers()
    }

   async getUsers(){
     this.setState({
         users: await this.userService.getUsers()
     })
    }

    showMe = (id) => {
        this.props.history.push({
            pathname:`/Users/${id}`
        })
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                {
                    users && users.map(user =>
                        (
                            <div key={user.id}>
                                <p><h2>{user.name}</h2></p>
                                <p>phone:<em>{user.phone}</em></p>
                                <p>website:<em>{user.website}</em></p>
                                <button className='btn-success' onClick={() => this.showMe(user.id)}>Show me</button>
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default Users;
