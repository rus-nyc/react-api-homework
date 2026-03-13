import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [quote, setQuote] = useState("")

  const getQuote = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    console.log(data)
    setQuote(data.slip.advice)
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <h1>{quote}</h1>
      <button onClick={getQuote}>New Advice</button>
    </div>
  )
}

export default App