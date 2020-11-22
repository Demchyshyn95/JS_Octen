export const userService = async (loadUsers) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
   loadUsers(users);
}
