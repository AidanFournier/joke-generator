import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h2>{props.setup}</h2>}
            <h1>{props.punchline}</h1>
            <hr />
        </div>
    )
}