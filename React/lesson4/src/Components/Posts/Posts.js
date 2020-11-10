import React from 'react';
import {PostService} from "../../Services/PostService";


class Posts extends React.Component {
    state = {
        posts: null
    }
    postsService = new PostService();

    componentDidMount() {
        this.getPosts()
    }

    async getPosts() {
        this.setState({
            posts: await this.postsService.getPosts()
        })
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                {
                    posts && posts.map(post =>
                        <div key={post.id}>
                            <p><h2>Post - {post.id}</h2></p>
                            <p>userId: {post.userId}</p>
                            <p>title: {post.title}</p>
                            <p>body: {post.body}</p><hr/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Posts;
