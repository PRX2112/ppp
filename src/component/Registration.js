import React, { useState } from 'react'

function Registration() {
    const [name,setName]=useState('');
    const[phone,set]=useState('');
    const [gender,setGender]=useState('');
    const[hobbies,setHobbies]=useState([]);
    const[city,setCity]=useState('');
    const[email,setEmail]=useState('');

    const[password,setPassword]=useState('');
    const[cpassword,setCpassword]=useState('');

    const handlename=(e)=>{
        setName(e.target.value);
      

    }
    const handleaddress=(e)=>{
        setAdd(e.target.value);
    }
    const handlegender=(e) =>{
        setGender(e.target.value);
    }
    // const handlehobbies=(e)=>{
    //     setHobbies(e.target.value);
    // }
    // const handlehobbies1=(e)=>{
    //     setHobbies(e.target.value);
    // }
    // const handlehobbies2=(e)=>{
    //     setHobbies(e.target.value);
    // }
    const handlecity=(e)=>{
        setCity(e.target.value);
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlepassword=(e) =>{
        setPassword(e.target.value);
    }
    const handlecpassword=(e) =>{
        setCpassword(e.target.value);
    }
    const handlesubmit=(e)=>{
        if(password!=cpassword)
        {
            alert('Password and confirm password must be same ....');
        }
        else
        {
            alert("Name : " +name +"\nAddress : " +add+"\nGender : "+gender+"\nHobbies : "+hobbies+"\nEmail : "+email+"\nCity : "+city+"\nHobbies : "+hobbies.toString());
        }
        e.preventDefault();
        
    }
    function chk(e){
       hobbies.push(e.target.value);
    }
    return (
        <div>
            <form>
                <table cellSpacing="10" cellPadding="4" width="30%">
                    <tr>
                        <td colspan="2"><h2>REGISTRATION PAGE</h2></td>
                    </tr>
                <tr>
                    <td>Name : </td>
                    <td><input type="text" value={name} onChange={(e) => handlename(e)} /></td>
                </tr>
                <tr>
                    <td>Address  : </td>
                    <textarea rows="5" cols="20" value={add} onChange={(e) => handleaddress(e)} > </textarea>
                </tr>
                <tr>
                    <td>Gender :</td>
                    <td><input type="radio" name="gen" value="Female" onChange={(e) => handlegender(e)}/>Female
                    <input type="radio" name="gen" value="Male" onChange={(e) => handlegender(e)}/>Male
                    <input type="radio" name="gen" value="Others" onChange={(e) => handlegender(e)}/>Others
                    </td>
                </tr>
                <tr>
                    <td>Hobbies :</td>
                    <td><input type="checkbox" name="chk" value="Travelling" onChange={chk}/>Travelling
                    <input type="checkbox" name="chk" value="Listening Music" onChange={chk}/>Listening Music
                    <input type="checkbox" name="chk" value="Reading" onChange={chk}/>Reading
                    </td>
                </tr>
                <tr>
                    <td>Select City : </td>
                    <td><select name="city" onChange={(e) => handlecity(e)}>
                            <option value="">Select City</option>
                            <option value="Surat" >Surat</option>
                            <option value="Baroda" >Baroda</option>
                            <option value="Abc" >Abc</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td><input type="text" onChange={(e) => handleEmail(e)}  /></td>
                </tr>
                <tr>
                    <td>Password : </td>
                    <td><input type="password" onChange={(e) => handlepassword(e)}  /></td>
                </tr>
                <tr>
                    <td>Confirm Password : </td>
                    <td><input type="password" onChange={(e) => handlecpassword(e)}  /></td>
                </tr>
                
                <tr>
                    <td colspan="2"><input type="submit" value="Submit" onClick={(e)=>handlesubmit(e)} /></td>

                </tr>
                
                </table> 
                
            </form>
        </div>
    )
}

export default Registration
