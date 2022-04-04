import React from "react"
import Joke from "./components/Joke"

export default function App() {
    return (
        <div>
            <Joke 
              punchline="It’s hard to explain puns to kleptomaniacs because 
              they always take things literally."
            />
            <Joke 
              setup="Parallel lines have so much in common."
              punchline="It's a shame they'll never meet."
            />
            <Joke 
              setup="Someeone stole my mood ring..."
              punchline="I don't know how to feel about that."
            />
            <Joke 
              setup="I broke my finger last week."
              punchline="On the other hand, I'm okay."
            />
            <Joke 
              setup="Someone stole my Microsoft Office annd they're gonna pay."
              punchline="You have my word."
            />
        </div>
    )
}