import React from "react";
import './User.css'

const User = (props) => {
    let {id, name, phone, email, website} = props.user
    return (
        <div>
            {
                id ? (
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                                 alt="Avatarka"/>
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text ">
                                    id: {id}<br/>
                                    phone: {phone}<br/>
                                    email: {email}<br/>
                                    website: {website}
                                </p>
                                < button className="btn btn-primary">Get all about {name}</button>
                            </div>
                        </div>
                    )
                    :
                    <div>
                    </div>

            }

        </div>

    )
}
export default User;
