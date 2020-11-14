import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router";

import {PostService} from "../../Services/PostService";
import MyComments from "../MyComments/MyComments";


function MyPosts(props) {

    const [posts, setPosts] = useState();
    const postService = new PostService();

    useEffect(getMyPosts);

    async function getMyPosts() {
        const {id} = props.match.params;
        const posts = await postService.getPostById(id);
        setPosts(posts);
    }

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
                                <MyComments id={post.id}/>
                                <hr/>
                            </div>
                        </div>
                    )
                )
            }

        </div>
    )
}

export default withRouter(MyPosts);

