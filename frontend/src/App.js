import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const [query, setQuery] = useState('')
    const [response, setResponse] = useState('')
    const handleQuery = async () => {
        if (query) {
            axios.get(`/api/user/?username=${query}`).then((resp) => {
                setResponse(JSON.stringify(resp, null, 2));
            }).catch(err => (setResponse(err)))
        }
    }
    return (
        <div className="App">
            <div id='QueryModule'>
                <input value={query} onChange={(e) => {
                    setQuery(e.target.value)
                }} placeholder={'Enter your query'}/>
                <button onClick={handleQuery}>send</button>
                <pre>
                    {response}
                </pre>
            </div>
        </div>
    );
}

export default App;
