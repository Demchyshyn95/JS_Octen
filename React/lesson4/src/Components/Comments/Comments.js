import React from 'react';
import {CommentsService} from "../../Services/CommentsService";


class Comments extends React.Component {
    state = {
        comments: null
    }
    commentsApi = new CommentsService()

    componentDidMount() {
        this.getComments()
    }

    async getComments() {
        this.setState({
            comments: await this.commentsApi.getComments()
        })
    }

    render() {
        const comments = this.state.comments;
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
}

export default Comments;
