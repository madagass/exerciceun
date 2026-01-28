import Count from "./Count";
type Props = {
    name : string;
    count : number;
    setCount: () => void;
};
function Dashboard ({name, count, setCount}: Props){
    console.log("Dashboard rerendered")
    return (
        <div>
            <p>Hello, {name}! How long do you want to count?</p>
            <br></br>
            <Count count={count} setCount={setCount} />
        </div>
    )
}
export default Dashboard;
