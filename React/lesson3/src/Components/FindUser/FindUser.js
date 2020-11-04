import React from "react";
import {Component, createRef} from "react";
import {UserService} from "../../Services/userService";
import User from "../User/User";

class FindUser extends Component {
    constructor() {
        super();
        this.id = React.createRef()
    }

    userService = new UserService();

    state = {
        user: [],
    }

    getUserById = () => {
        let id = this.id.current.value;
        this.rezult(id)
    }

   async rezult(id) {
        this.setState({
            user:await this.userService.getUserById(id)
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">User_ID:</label>
                        <div className="col-sm-10">
                            <input type="number" min={1} max={10} ref={this.id} className="form-control" id="inputEmail3"
                                   placeholder="User ID" onChange={this.getUserById}/>
                        </div>
                    </div>
                </form>
                <div>
                    {
                        this.state.user ? <User user={this.state.user}/> : ''
                    }
                </div>
            </div>

        )
    }
}

export default FindUser;
