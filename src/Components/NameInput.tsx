type Props = {
    name : string;
    setName : (value: string) => void;
};
function InputName ({name, setName} : Props){
    console.log("NameInput rerendered")
    return(
        <div className="text-center">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Tappez votre nom"/>
        </div>
    )
}
export default InputName;