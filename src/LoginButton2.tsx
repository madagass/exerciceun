type Props = {
    logged : boolean;
    toggleLogged : ()=> void;
};
function LoginButton ({logged,toggleLogged}: Props){
    return(
        <button onClick={toggleLogged}>
            { logged ? "Log out" : "Log in"}
        </button>
    );
};
export default LoginButton; 