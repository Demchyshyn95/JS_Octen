import {connect} from "react-redux";
import './style.css';

const SelectedUsers = ({selecteds}) => {
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

export default connect(mapStateToProps, null)(SelectedUsers);
