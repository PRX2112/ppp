import React ,{useReducer} from 'react'

const initialvalue={
    burgerQty : 0,
    pizzaQty :0,
    totalQty :0

};

function reduser(state,action)
{
    switch (action.type)
    {
        case "add_burger" :
            return {...state,burgerQty:state.burgerQty+1,totalQty:state.totalQty+ 100}
        case "sub_burger" :
            return {...state,burgerQty:state.burgerQty-1,totalQty:state.totalQty- 100}
        case "add_pizza":
            return {...state,pizzaQty:state.pizzaQty+1,totalQty:state.totalQty+ 150}
        case "sub_pizza":
                return {...state,pizzaQty:state.pizzaQty-1,totalQty:state.totalQty- 150}
        default:
            return state
    }
};

function Reducer2() {
    const [state,dispatch]=useReducer(reduser,initialvalue);

    return (
        <>
            <h2> - - - Burger cost is 100 and Pizza cost is 150 - - -  </h2>

            Burger : &nbsp;
            <button onClick ={() => dispatch({ type : "add_burger" ,payload:100})}> + </button>&nbsp;
            {state.burgerQty} &nbsp;
            <button onClick ={() => dispatch({ type : "sub_burger" ,payload:100})}>-</button><br></br>

            Pizza :&nbsp;
            <button onClick ={() => dispatch({ type : "add_pizza" ,payload:100})}> + </button>&nbsp;
            {state.pizzaQty}&nbsp;
            <button onClick ={() => dispatch({ type : "sub_pizza" ,payload:100})}> - </button>
            <br></br>

           <b> Total Amount : {state.totalQty}</b>
        </>
    )
}

export default Reducer2
