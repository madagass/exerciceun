type Props = {
    count : number,
    setCount : () => void;
};
function Count ({count, setCount}: Props){
    return (
        <div>
            count : {count}
            <button onClick={setCount}>Increase +</button>
        </div>
    );
}
export default Count;