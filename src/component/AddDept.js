import React from 'react'

function AddDept() {
    const [name,setName]=useState('');
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        props.newDept(name);
        console.log(name);

    }
    return (
        <div className='container'>
           <h1>Add Dept</h1> 

           <form onSubmit={handlesubmit}>
                <div>
                    <input type='text' onChange={(e)=>setName(e.target.value)} value={name} id="" placeholder="Enter dept name" />
                    <button type="submit" >SUBMIT</button>
                </div>
           </form>
        </div>
    )
}

export default AddDept
