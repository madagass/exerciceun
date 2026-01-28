type Props = {
    count : number,
    setCount : () => void;
};
function Count ({count, setCount}: Props){
    return (
        <div className="text-center">
            count : {count}
            <br></br>
            <button onClick={setCount}>Increase</button>
        </div>
    );
}
export default Count;