
import React ,{useReducer} from 'react'

const initialstate={
    burgerQty : 0,
    burgerPrice :0,

    pizzaQty :0,
    pizzaPrice :0,

    frankieQty :0,
    frankiePrice :0,

    sandwhichQty :0,
    sandwhichPrice :0,

    pastaQty :0,
    pastaPrice :0,
    
    totalQty :0
}

function Billing() {
    
    const reducer=(state,action) =>{
        switch (action.type)
        {
            case 'add_burger' :
                return {...state,burgerQty:state.burgerQty+1,burgerPrice:state.burgerPrice+100,totalQty:state.totalQty+ 100}
            case 'sub_burger' :
                return {...state,burgerQty:state.burgerQty-1,burgerPrice:state.burgerPrice-100,totalQty:state.totalQty - 100}

            case 'add_pizza' :
                return {...state,pizzaQty:state.pizzaQty+1,pizzaPrice:state.pizzaPrice+150,totalQty:state.totalQty+ 150}
            case 'sub_pizza' :
                return {...state,pizzaQty:state.pizzaQty-1,pizzaPrice:state.pizzaPrice-150,totalQty:state.totalQty - 150}

            case 'add_frankie' :
                return {...state,frankieQty:state.frankieQty+1,frankiePrice:state.frankiePrice+60,totalQty:state.totalQty+ 60}
            case 'sub_frankie' :
                return {...state,frankieQty:state.frankieQty-1,frankiePrice:state.frankiePrice-60,totalQty:state.totalQty - 60}

            case 'add_sandwhich' :
                return {...state,sandwhichQty:state.sandwhichQty+1,sandwhichPrice:state.sandwhichPrice+40,totalQty:state.totalQty+ 40}
            case 'sub_sandwhich' :
                return {...state,sandwhichQty:state.sandwhichQty-1,sandwhichPrice:state.sandwhichPrice-40,totalQty:state.totalQty - 40}

            case 'add_pasta' :
                return {...state,pastaQty:state.pastaQty+1,pastaPrice:state.pastaPrice+100,totalQty:state.totalQty+ 100}
            case 'sub_pasta' :
                return {...state,pastaQty:state.pastaQty-1,pastaPrice:state.pastaPrice-100,totalQty:state.totalQty - 100}

            
            default :
                return state
        }
    }
    const [state,dispatch]=useReducer(reducer,initialstate);

    return (
        <>

            <div>
                
                <table border='3' width='50%' align='center'>
                    <thead>
                        <tr>
                            <th colspan='3'><h2>Order List</h2></th>
                        </tr>
                        <tr>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Burger</td>
                            <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={()=>{dispatch({type : 'add_burger' })}}> + </button>&nbsp;&nbsp;
                                {state.burgerQty}&nbsp;&nbsp;{state.burgerQty!=0 ? <button className='btn btn-danger'  onClick={() => {dispatch({ type : 'sub_burger'})}}> - </button>
                                : <button className='btn btn-danger' disabled  onClick={() => {dispatch({ type : 'sub_burger'})}}> - </button>}</td>
                                <td>{state.burgerPrice}</td>
                        </tr>
                        <tr>
                            <td>Pizza</td>
                            <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={()=>{dispatch({type : 'add_pizza' })}}> + </button>&nbsp;&nbsp;
                                {state.pizzaQty}&nbsp;&nbsp;{state.pizzaQty!=0 ? <button className='btn btn-danger'  onClick={() => {dispatch({ type : 'sub_pizza'})}}> - </button>
                                : <button className='btn btn-danger' disabled onClick={() => {dispatch({ type : 'sub_pizza'})}}> - </button>}</td>
                                <td>{state.pizzaPrice}</td>
                        </tr>

                        <tr>
                            <td>Frankie</td>
                            <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={()=>{dispatch({type : 'add_frankie' })}}> + </button>&nbsp;&nbsp;
                                {state.frankieQty}&nbsp;&nbsp;{state.frankieQty!=0 ? <button className='btn btn-danger'  onClick={() => {dispatch({ type : 'sub_frankie'})}}> - </button>
                                : <button className='btn btn-danger' disabled  onClick={() => {dispatch({ type : 'sub_frankie'})}}> - </button>}</td>
                                <td>{state.frankiePrice}</td>
                        </tr>
                        <tr>
                            <td>Sandwhich</td>
                            <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={()=>{dispatch({type : 'add_sandwhich' })}}> + </button>&nbsp;&nbsp;
                                {state.sandwhichQty}&nbsp;&nbsp;{state.sandwhichQty!=0 ? <button className='btn btn-danger'  onClick={() => {dispatch({ type : 'sub_sandwhich'})}}> - </button>
                                : <button className='btn btn-danger' disabled onClick={() => {dispatch({ type : 'sub_sandwhich'})}}> - </button>}</td>
                                <td>{state.sandwhichPrice}</td>
                        </tr>
                        <tr>
                            <td>Pasta</td>
                            <td>
                            &nbsp;&nbsp;<button className='btn btn-success' onClick={()=>{dispatch({type : 'add_pasta' })}}> + </button>&nbsp;&nbsp;
                                {state.pastaQty}&nbsp;&nbsp;{state.pastaQty!=0 ? <button className='btn btn-danger'  onClick={() => {dispatch({ type : 'sub_pasta'})}}> - </button>
                                : <button className='btn btn-danger' disabled  onClick={() => {dispatch({ type : 'sub_pasta'})}}> - </button>}</td>
                                <td>{state.pastaPrice}</td>
                        </tr>
                        
                        <tr>
                            <td colspan='3'align='right'><b>Total Amount : {state.totalQty}&nbsp;&nbsp;</b></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default Billing
