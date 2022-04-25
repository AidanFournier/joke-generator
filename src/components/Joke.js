import React from "react"

export default function Joke(props) {
    
    const [ isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h2>{props.setup}</h2>}
            {isShown && <h1>{props.punchline}</h1>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}