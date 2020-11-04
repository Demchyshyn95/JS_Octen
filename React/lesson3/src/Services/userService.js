import axios from "axios";

export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users'

    async getUserById(id) {
        const {data} = await axios(`${this.url}/${id}`)
        return data;
    }

    async getUsers(text) {
        let findName = text.toLowerCase();
        const {data} = await axios(this.url);
        let find = data.filter(user => user.name.toLowerCase().includes(findName));
        return find;
    }

}
