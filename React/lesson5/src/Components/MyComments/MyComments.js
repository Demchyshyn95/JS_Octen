import React, {Component, useEffect, useState} from 'react';
import {CommentsService} from "../../Services/CommentsService";


function MyComments(props) {
    const [myComments, setMyComments] = useState();
    const [showComments, setShowComments] = useState(false);


    const commentsService = new CommentsService();

    useEffect(getMyComments);

    async function getMyComments() {
        const {id} = props;
        const myComments = await commentsService.getCommentsById(id);
        setMyComments(myComments);
    }

   function showComment() {
       setShowComments(!showComments);
   }

    return (
        <div>
            <div>
                <button className='btn-success' onClick={showComment}>Show Comments</button>
            </div>
            {
                showComments && myComments.map(comment =>
                    <div key={comment.id}>
                        <p style={{color: "red"}}>Comment -- {comment.id}</p>
                        <p>postId: {comment.postId}</p>
                        <p>name: {comment.name}</p>
                        <p>body: {comment.body}</p>
                        <hr/>
                    </div>
                )
            }
        </div>
    );
}
export default MyComments;

