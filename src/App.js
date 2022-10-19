import logo from './logo.svg';
import './App.css';
// import Registration from './component/Registration';
import Assign_q1 from './component/Assign_q1';
import Trial from './component/Trial';
import Department from './component/Department';
import Billing from './component/Billing';
import Stage1 from './component/Stage1';
import React,{createContext} from 'react';
import Reducer1 from './component/Reducer1';
import Reducer2 from './component/Reducer2';

const userinfo = createContext();
function App() {
  const users={
    name :"Gautami",
    dept :"DCS",
    university :"VNSGU" 
  };
  return (
  
    <>

       {/* <Registration /><br /><br/> */}
      {/* <Assign_q1 /> */}
      {/* <Department /> */}
      <Billing /><br></br>
      {/* <userinfo.Provider value={users}>
             <Stage1 />   
      </userinfo.Provider> */}
      <Reducer1 /> 
      {/* <Reducer2 /> */}
    </>
      
   
  );
}

export default App;
export {userinfo};
