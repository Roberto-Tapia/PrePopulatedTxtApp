import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Embedded from './components/Embedded.jsx'

function App() {

  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleClick () {
    alert('Sorry, this feature is not yet available. Have a cookie in the meantime 🍪')
  }

  useEffect(() => {
    console.log(value)
  }, [value])


  return (
    <>
      <Header />
      <Main handleChange={handleChange} />
      <Embedded handleClick={handleClick} value={value} />
    </>
  )
}

export default App
