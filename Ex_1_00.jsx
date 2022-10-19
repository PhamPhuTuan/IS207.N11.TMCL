import { render } from '@testing-library/react';
import React from 'react';

class MyComponent extends React.Component{
    state={
        first:false,
        second:true,
    }

    render()
{
    const{first,second}=this.state;
    return(
        <main>
            <section>
                <button disabled={first}>First</button>
            </section>
            <section>
                <button disabled={first}>Second</button>
            </section>
        </main>
    );
}
}

export default MyComponent;