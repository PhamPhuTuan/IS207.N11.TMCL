import React from "react";
import ReactDOM from "react-dom";


const UserForm = () => {
    return (
        <form>
            <label>Enter a username:</label>
            <input type="text" />
        </form>
    );
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));