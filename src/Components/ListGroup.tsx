import { useState } from "react";
interface Props {
    items : string[];
    title : string
    onSelectedIndex : (item : string) => void;
} 
function ListGroup({items,title,onSelectedIndex}: Props){
    const [selectedIndex,setSelectedIndex] = useState<number>(-1);
    return ( 
        <div>
            <h1>{title}</h1>
            <ul className="list-group">
            {items.map((item,index)=>(<li className={ selectedIndex === index ? "list-group-item active": "list-group-item"} key={index} onClick={()=>{setSelectedIndex(index);onSelectedIndex(item);}}>{item}</li>))}
            </ul>
        </div>
        
    );
}
export default ListGroup;