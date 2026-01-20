// Step 1: Accept `joke` and `loading` as props
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2 & 3: Conditional rendering */}
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
    </div>
  )
}

export default JokeDisplay
