import React from "react"
import Joke from "./components/Joke"
import jokesData from "./jokesData"
console.log(jokesData)

export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <div>
        {jokeElements}
    </div>
  )
}