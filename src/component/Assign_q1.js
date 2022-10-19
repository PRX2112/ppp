import React, { useState } from 'react'

function Assign_q1() {

    const [name,setName]=useState({dept:""});
    const [list,setList]=useState([{dept:""}]);

    const handlesubmit = ()=>{
        //e.preventDefault();
        setList([...list,name])
    //    const first=e.target.fname.value;
    //     console.log("Name :"+first);
    //     setName(e.target.fname.value);
    //     setList([...list,{'dept':e.target.fname.value}]);
        console.log("List :"+list);
      //  alert(first);

       
    }
    
    return (
        <div>
            {/* <form onSubmit={handlesubmit}>
                <input type="text" name="fname" placeholder="Name" />&nbsp;&nbsp;
                <button >Add</button>
            </form> */}
            <input type="text" name="fname" placeholder="Name" onChange={(e)=>{
                    setName({...name,dept:e.target.value})
            } }/>&nbsp;&nbsp;
            <button onClick={()=>{handlesubmit()}}>Add</button>
            <ul>
                {
                    // list.map(e=>{
                    //     return (
                    //         <li>{e}</li>
                    //     )
                    // })
                }
                {/* <li>{name}</li> */}
            </ul>
            
        </div>
    )
}

export default Assign_q1
