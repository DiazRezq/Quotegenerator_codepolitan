
import './App.css'
import {useEffect, useState} from "react";

 export default function App() {
const [quote, setQuotes] = useState("")

  async function getQuote(){
    const res = await fetch('https://dummyjson.com/quotes/random')
    const data = await res.json()
    setQuotes(`${data.quote} - ${data.author}`)
  }

   useEffect(() => {
     getQuote()
   }, []);


  return (
    <>
    <div className="App">
      <h1>Quotes Generator</h1>
      <p>{quote}</p>
      <button onClick={getQuote}>Generate</button>
    </div>
    </>
  )
}

