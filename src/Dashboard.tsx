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
            <p>Yoooo whatsup {name} boubou hohohoho fuck polopolo dumme nigga click count for + fuck polo</p>
            <br></br>
            <Count count={count} setCount={setCount} />
        </div>
    )
}
export default Dashboard;
