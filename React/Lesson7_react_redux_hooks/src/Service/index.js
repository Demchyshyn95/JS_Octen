export const userService = async () => {
    return (await fetch('https://jsonplaceholder.typicode.com/users')).json()
}
