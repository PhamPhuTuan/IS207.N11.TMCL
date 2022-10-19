import * as React from "react";

class MyInput extends React.Component {
    onChange() {
        console.log("Changed");
    }

    onBlur() {
        console.log("Blured");
    }

    render() {
        return <input onChange={this.onChange} onBlur={this.onBlur} />;
    }
}

export default MyInput;