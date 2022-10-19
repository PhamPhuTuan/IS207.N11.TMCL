import * as React from "react";

class MyButton extends React.Component{
    render(){
        const{diasbled,text}=this.props;
        return <button disabled={disabled}>{text}</button>
    }
}

export default MyButton;