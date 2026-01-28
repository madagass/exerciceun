import { useState } from "react";
import InputName from "./Components/NameInput";
import LoginButton from "./Components/LoginButton2";
import Dashboard from "./Components/Dashboard";
import ListGroup from "./Components/ListGroup";
import Alert  from "./Components/Alert";
import "./index.css";
function App(){
  const [name, setName]= useState("");
  const [count, setCount] = useState(0);
  const [logged, toggleLogged]=useState(false)
  const items=["Adam","Chirra","Lfad","polopolo"];
  const handleSelectedItem= (item: string)=>{
    console.log(item);
  }
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4" style={{ width: "420px" }}> 
        <h1 className="card-title text-center mb-4">User Panel</h1>
        {logged ?
          <>
           <Dashboard name={name} count={count} setCount={()=> setCount(count+1)}/> 
           <ListGroup items={items} title="List" onSelectedIndex={handleSelectedItem}/>
           <br></br>
           <Alert/><br></br>
           <LoginButton logged={logged} toggleLogged={()=>toggleLogged(!logged)}/>
          </>
          :
          <>
           <InputName name={name} setName={setName} />
           <LoginButton logged={logged} toggleLogged={() => toggleLogged(!logged)} />
          </>
       }  
      </div>
    </div>
  )
}
export default App;