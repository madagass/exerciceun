type Props = {
    logged : boolean;
    toggleLogged : ()=> void;
};
function LoginButton ({logged,toggleLogged}: Props){
    return(
        <button className="text-center" onClick={toggleLogged}>
            { logged ? "Log out" : "Log in"}
        </button>
    );
};
export default LoginButton; 