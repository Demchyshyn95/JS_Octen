import './App.css';
import Users from "./Components/Users/Users";
import SelectedUsers from "./Components/SelectedUsers/SelectedUsers";

function App(props) {
    return (
        <div className="App">
            <SelectedUsers/>
            <Users/>
        </div>
    )
}

export default App;

