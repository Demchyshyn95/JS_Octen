import React from 'react';
import {UsersService} from "../../Services/UsersService";
import MyPosts from "../MyPosts/MyPost";

/*import {withRouter} from "react-router";*/

class User extends React.Component {
    state = {
        user: null,
        showPost: false,
    }
    userService = new UsersService()

    componentDidMount() {
        this.getUserById()
    }

    async getUserById() {
        const id = this.props.match.params.id;
        this.setState({
            user: await this.userService.getUserById(id)
        })
    }

    changeShow = () => {
        this.setState({
            showPost: !this.state.showPost
        })
    }

    render() {
        const {showPost, user} = this.state;
        return (
            <div>
                {
                    user && (
                        <div>
                            <div>
                                <p><h2>{user.name}</h2></p>
                                <p>phone:<em>{user.phone}</em></p>
                                <p>website: <em>{user.website}</em></p>
                                <button className='btn-success' onClick={this.changeShow}>My posts</button>
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
}

export default User;
