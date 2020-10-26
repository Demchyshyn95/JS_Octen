const User = (props) => {
    let {id, name, age, status} = props.user;
    return (
        <div>
            {
                status ? (
                    <div style={{color: "red"}}>
                        id: {id} Name --- {name} age: {age}
                    </div>
                ) : (
                    <div style={{color: "blue"}}>
                        id: {id} Name --- {name} age: {age}
                    </div>
                )
            }
        </div>
    )
}
export default User;
