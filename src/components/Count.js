import React, { useState } from 'react'
import { connect } from  'react-redux'
import { increaseCount, decreaseCount, resetCount } from '../redux/acitons/counter/Counter'


function Count(props) {
    const [number, setNumber] = useState(1);


    return (

        <div>
            <h1>Counter {props.counter} </h1>
            <input type='text' value={number} onChange={e=>setNumber(Number(e.target.value))} />
             <button onClick={() => props.increaseCount(number)}>Increment {number}</button>
            <button onClick={props.decreaseCount}>Decrement</button>
            <button onClick={props.resetCount}>Reset</button>
           <h1>Users</h1>
            <ul>
                <li></li>
            </ul>

        </div>
    )
}

const mapStateToProps = state =>{

    return{
        counter: state.counter
    }

}

const mapDispatchToProps = dispatch =>{
    return{

        increaseCount: number =>dispatch(increaseCount(number)),
        decreaseCount: () =>dispatch(decreaseCount()),
        resetCount: () =>dispatch(resetCount())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Count);