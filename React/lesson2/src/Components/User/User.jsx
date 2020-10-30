import s from './User.module.css'

const User = (props) => {
    const {user} = props;
    let {id, name, email} = user;
    const show = () => {
        props.showUser(user)
    }
    return (
        <div className={s.asd}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                        id: {id} <br/> email: {email}
                    </p>
                    <button type="button" className="btn btn-outline-danger"
                            onClick={show}>Show
                        user
                    </button>
                </div>
            </div>
        </div>
    )
}
export default User;
