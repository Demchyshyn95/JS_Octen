import {connect, useSelector} from "react-redux";
import './style.css';

const SelectedUsers = () => {
    const selecteds = useSelector(({selecteds}) => selecteds)
    return (
        <div className='blue'>
            <span>Selected:</span>{
            selecteds && selecteds.map(el => `${el.username},`
            )
        }
        </div>
    )
}
const mapStateToProps = (state) => {
    return state;
}

export default SelectedUsers;
