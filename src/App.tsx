import { useState } from "react";
import InputName from "./NameInput";
import LoginButton from "./LoginButton2";
import Dashboard from "./Dashboard";
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