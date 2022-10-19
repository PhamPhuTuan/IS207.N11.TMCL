import * as React from "react";

export default function App() {
    const [name, setName] = React.useState("Adam");
    const [age, setAge] = React.useState(35);

    return (
        <>
            <section>
                <input value={name}
                onChange={(e)=> setName(e.target.value)} />
                <p>My name is {name}</p>
            </section>
            <section>
                <input value={age}
                type="number"
                onChange={(e)=> setAge(e.target.value)} />
                <p>My age is {age}</p>
            </section>
        </>
    )
}