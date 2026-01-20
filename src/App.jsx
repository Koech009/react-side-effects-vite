import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: State
  const [joke, setJoke] = useState("")
  const [loading, setLoading] = useState(false)

  // Step 3: Fetch function
  function fetchJoke() {
    setLoading(true)

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke)
      })
      .catch(() => {
        setJoke("Failed to fetch joke.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  // Step 2: Fetch on mount
  useEffect(function () {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Step 4: Pass props */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Step 5: Pass fetch function */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
