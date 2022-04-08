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

// <Joke 
//   punchline="It’s hard to explain puns to kleptomaniacs because 
//   they always take things literally."
//   isPun={true}
//   upvotes={10}
//   downvotes={2}
//   comments={[{author: "", body: "", title: ""}]}
// />
// <Joke 
//   setup="Parallel lines have so much in common."
//   punchline="It's a shame they'll never meet."
//   isPun={false}
// />
// <Joke 
//   setup="Someeone stole my mood ring..."
//   punchline="I don't know how to feel about that."
//   isPun={false}
// />
// <Joke 
//   setup="I broke my finger last week."
//   punchline="On the other hand, I'm okay."
//   isPun={false}
// />
// <Joke 
//   setup="Someone stole my Microsoft Office and they're gonna pay."
//   punchline="You have my word."
//   isPun={true}
// />