import React,{useState} from 'react'
import List from './List';

function Department() {
    const [depts,setDepts]=useState([]);
    const [dept,setDept]=useState("");

    const addDept=(e)=>{
        e.preventDefault();
        setDepts(depts.concat(dept));
        setDept("");
    }

    return (
        <div > 
            <input type="text" placeholder="Department" value={dept} onChange={(e)=>setDept(e.target.value)} />
            <input type="submit" value="Add" onClick={addDept} />
            <ul>
                <List depts={depts} />
            </ul>
        </div>
    )
}

export default Department
