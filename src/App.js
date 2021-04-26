import './App.css';
import {useState} from 'react'
import Grid from "./Grid";

function App() {

    const randomColor = () => {
        let color = '#';
        for (let i = 0; i < 6; i++) {
            const random = Math.random();
            const bit = (random * 16) | 0;
            color += (bit).toString(16);
        }
        return color;
    };

    let plattes = []
    let [ ranColor, changeColor ] = useState( randomColor() )
    let change = ()=> changeColor(randomColor())
    for (let i=1; i<6;i++) plattes.push(<Grid color={ranColor} opacity={0.2*i}/>)
    return (
        <div className="App">
            <h1>Random Hex color Generator</h1>
            <button onClick={change}>Generate</button>
            <div className="platte">
                {plattes}
            </div>
        </div>
    );
}

export default App;
