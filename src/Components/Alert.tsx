import { useState } from 'react';
import lfad from '../assets/lfad.jpg';
export const Alert = () => {
  const [show, setShow]=useState<boolean>(false);
  return (
    <>
      { show ?
        <>  
          <div className="alert alert-danger" role="alert">A new fad appears</div>
          <img src={lfad} alt="Ifad" style={{ width: "100px" }} />
          <button onClick={()=>{setShow(false)}}>Click to make fad run away</button>
        </>
        :
        <>
          <p>there is no fad here click button to make fad appears</p>
          <button onClick={()=>{setShow(true)}}>Click for fad</button>
        </>
      }
      
    </>
  )
}
export default Alert;
