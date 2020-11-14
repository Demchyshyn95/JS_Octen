import React, {useEffect, useState} from 'react';
import {CommentsService} from "../../Services/CommentsService";


function Comments() {

    const [comments,setComments] = useState();

   const commentsApi = new CommentsService()

    useEffect(getComments)

    async function getComments() {
       const comments = await commentsApi.getComments()
          setComments(comments)
    }

        return (
            <div>
                {
                    comments && comments.map(comment =>
                        <div key={comment.id}>
                            <p><h2>Comment - {comment.id}</h2></p>
                            <p>postId: {comment.postId}</p>
                            <p>name: {comment.name}</p>
                            <p>body: {comment.body}</p><hr/>
                        </div>
                    )
                }
            </div>
        )
}

export default Comments;
