import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "./counter-reducer";

function CounterScreen() {

    const { count } = useSelector((state) => state.counter);
    const [counter, setCounter] = useState(count);
    const dispatch = useDispatch();
    const handleSaveCounter = () => {
        dispatch(updateCount(counter));
    }

    const updateCountGloballySims = (newNumer) => {
        setCounter(newNumer);
        dispatch(updateCount(newNumer));
    }

    return (
        <div>
            <h1>Counter Screen</h1>
            <h2>{ counter }</h2>

            {/* Demo I -- Save editing number as wholesale rather than simultaneous. */}
            {/* <button onClick={ () => setCounter(counter + 1)}> + </button>
            <button onClick={ () => setCounter(counter - 1)}> -  </button> */}

            {/* Demo II -- Editing number globally and simultaneously. */}
            <button onClick={ () => updateCountGloballySims(counter + 1)}> + </button>
            <button onClick={ () => updateCountGloballySims(counter - 1)}> -  </button>            
     
            <br/><br/>
            <button 
                onClick={ handleSaveCounter }
                className="btn btn-secondary">
                Save 
            </button>

        </div>
    );
}

export default CounterScreen;