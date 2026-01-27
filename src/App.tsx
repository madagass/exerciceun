import { useState } from "react";
import InputName from "./Components/NameInput";
import LoginButton from "./Components/LoginButton2";
import Dashboard from "./Components/Dashboard";
import ListGroup from "./Components/ListGroup";
import Alert  from "./Components/Alert";
function App(){
  const [name, setName]= useState("");
  const [count, setCount] = useState(0);
  const [logged, toggleLogged]=useState(false)
  return (
    <div>
      <h1>User Panel</h1>
      {logged ?
        <>
        <Dashboard name={name} count={count} setCount={()=> setCount(count+1)}/> 
        <LoginButton logged={logged} toggleLogged={()=>toggleLogged(!logged)}/>
        <ListGroup items={items} title={title}}/>
        <Alert/>
        </>
        :
      <>
      <InputName name={name} setName={setName} />
      <LoginButton logged={logged} toggleLogged={() => toggleLogged(!logged)} />
      </>
      } 
    </div>
      
  )
}
export default App;