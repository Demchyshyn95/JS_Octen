import React, {Component} from 'react';
import {CommentsService} from "../../Services/CommentsService";


export default class MyComments extends Component {
    state = {
        myComments: null,
        showComments: false,
    }
    commentsService = new CommentsService();

    componentDidMount() {
        this.getMyComments()
    }

    async getMyComments() {
        const {id} = this.props
        this.setState({
            myComments: await this.commentsService.getCommentsById(id)
        })
    }

    showComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    render() {
        const {myComments, showComments} = this.state
        return (


            <div>
                <div>
                    <button className='btn-success' onClick={this.showComments}>Show Comments</button>
                </div>
                {
                    showComments && myComments.map(comment =>
                        <div key={comment.id}>
                            <p style={{color:"red"}}>Comment -- {comment.id}</p>
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
}
