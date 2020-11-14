import {Redirect, Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";

import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
import Home from "./Components/Home/Home";
import MyComments from "./Components/MyComments/MyComments";
import User from "./Components/User/User";
import MyPosts from "./Components/MyPosts/MyPost";


function App() {
    return (
        <div className='App'>
            <div className='home'>
                <div>
                    <NavLink className='navli' exact to='/'>Home</NavLink>
                </div>
                <div>
                    <NavLink className='navli' to='/Users'>Users</NavLink>
                </div>
                <div>
                    <NavLink className='navli' to='/Posts'>Posts</NavLink>
                </div>
                <div>
                    <NavLink className='navli' to='/Comments'>Comments</NavLink>
                </div>
            </div>
            <div>
                <Switch>
                    <Route path='/Users/:id' component={User}/>
                    <Route path='/Users' component={Users}/>
                    <Route path='/Posts' component={Posts}/>
                    <Route path='/Comments' component={Comments}/>
                    <Route path='/' exact component={Home}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </div>
    )
}

export default App;
