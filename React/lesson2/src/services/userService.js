export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    async getUsers(){
        return (await fetch(this.url)).json()
    }
}
