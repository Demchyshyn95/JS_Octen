import './App.css';
import FindUser from "./Components/FindUser/FindUser";
import SelectUser from "./Components/SelectUser/SelectUser";

function App() {
    return (
        <div className="App">
            <div className='find'>
                <FindUser/>
            </div>
            <div className='select'>
                <SelectUser/>
            </div>
        </div>
    );
}

export default App;
