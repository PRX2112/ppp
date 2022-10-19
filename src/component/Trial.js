import React ,{useState} from 'react'

function Trial() {
    const test1=[{ n:"test",d:"surat"},
                {n:"test1",d:"Baroda"}];
    const [name,setName] =useState("ABC");
    const [dept,setDept]=useState("MCA");

    const  handlefunc=()=>{
        setName(test1[0]["n"]);
        setDept(test1.map.apply((d1) => {
            return (d1.d);
        }))
    }
    return (
        <div>
            <h2>Employee Details....</h2>
            <p>{name} is the employee of dept {dept}</p>
            <button onClick={handlefunc}>Check Data</button>
        </div>
    )
}

export default Trial
