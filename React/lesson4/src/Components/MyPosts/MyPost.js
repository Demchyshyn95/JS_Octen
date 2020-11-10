import React from 'react';

import {PostService} from "../../Services/PostService";
import MyComments from "../MyComments/MyComments";

export default class MyPosts extends React.Component {
    state = {
        posts: null
    }

    postService = new PostService();

    componentDidMount() {
        this.getMyPosts()
    }

    async getMyPosts() {
        const {id} = this.props
        this.setState({
            posts: await this.postService.getPostById(id)
        })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                {
                    posts && posts.map(post =>
                        (
                            <div key={post.id}>
                                <p><h2>POST - {post.id}</h2></p>
                                <p>userId: {post.userId}</p>
                                <p>title: {post.title}</p>
                                <p>body: {post.body}</p>
                                <div>
                                    <MyComments id={post.id}/><hr/>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}
