export class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts'

    async getPosts() {
        return ((await fetch(this.url)).json())
    }

    async getPostById(id) {
        return ((await fetch(`${this.url}?userId=${id}`)).json())
    }
}
