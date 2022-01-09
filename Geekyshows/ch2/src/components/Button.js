import {useHistory} from "react-router-dom";

function Button(){
    let history=useHistory();

    function handleClick(){
        history.push("/");
        // history.goBack();
        // history.goForward();
    }

    return (
        <button type="button" onClick={handleClick}>
            Click Me
        </button>
    )
}

export default Button;