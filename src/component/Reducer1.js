import React,{useReducer} from 'react'

const initialvalue={
    name : ' ',
    phone :' ',
    email :' '
};

function reduser(state,action)
{
    switch (action.type)
    {
        case "textchangehandle" :
            return {...state,[action.field]:action.payload,}
    }
};
function Reducer1() {
    
    const [state,dispatch]=useReducer(reduser,initialvalue);
    function textchangehandle(e)
    {
        dispatch({
            type :"textchangehandle",
            field :e.target.name,
            payload :e.target.value

        });
    }

    function disformvalue()
    {
        alert("Nmame :"+state.name+"\nPhone Number :"+state.phone+"\nEmail Id :"+state.email);
        
    }
    return ( 
        <div>
            <form onSubmit={disformvalue}>
                <table border='3' align='center' width='50%'>
                    <tr>
                        <td colSpan='2' align='center'><h3>Displaying data using Reducer</h3></td>
                    </tr>
                    <tr>
                        <td>Name : </td>
                        <td><input type='text' name='name' value={state.name} onChange={(e) => textchangehandle(e)} /></td>
                    </tr>
                    <tr>
                        <td>Phone Number :</td>
                        <td><input type='text' name='phone' value={state.phone} onChange={(e) => textchangehandle(e)} /></td>
                    </tr>

                    <tr>
                        <td>Email :</td>
                        <td><input type='text' name='email' value={state.email} onChange={(e) => textchangehandle(e)} /></td>
                    </tr>
                    <tr>
                        <td colSpan='2' align='center'><button type="submit">Add Data</button></td>
                    </tr>
                </table>
               
            </form>
        </div>
    )
}

export default Reducer1
