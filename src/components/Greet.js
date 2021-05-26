import React from 'react'

function Greet(props) {
    return (
        <div>
            <h4>Hello, {props.name} ,Your From {props.city}</h4>
            <hr/>
            <h5>{props.children}</h5>
        </div>
    )
}

export default Greet
