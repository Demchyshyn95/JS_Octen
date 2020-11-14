export class CommentsService {
    url = 'https://jsonplaceholder.typicode.com/comments'
 async getComments(){
    return  ((await fetch(`${this.url}`)).json())
    }

    async getCommentsById(id){
        return ((await fetch(`${this.url}?postId=${id}`)).json())
    }
}
