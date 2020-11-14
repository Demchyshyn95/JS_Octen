import React, {useEffect, useState} from 'react';
import {PostService} from "../../Services/PostService";


function Posts() {
    const [posts, setPosts] = useState();
    const postsService = new PostService();

    useEffect(getPosts)

    async function getPosts() {
        const rezult = await postsService.getPosts();
        setPosts(rezult)
    }

    return (
        <div>
            {
                posts && posts.map(post =>
                    <div key={post.id}>
                        <p><h2>Post - {post.id}</h2></p>
                        <p>userId: {post.userId}</p>
                        <p>title: {post.title}</p>
                        <p>body: {post.body}</p>
                        <hr/>
                    </div>
                )
            }
        </div>
    )
}

export default Posts;
