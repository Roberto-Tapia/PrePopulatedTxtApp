import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Embedded from './components/Embedded.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [value, setValue] = useState("");
  const [messageValue, setMessageValue] = useState("DEFAULT MESSAGE")

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleMessageChange(event) {
    console.log('its working')
    setMessageValue(event.target.value)
  }

  function handleClick () {
    alert('Sorry, this feature is not yet available. Have a cookie in the meantime 🍪')
  }

  return (
    <>
      <Header />
      <Main handleChange={handleChange}  handleMessageChange={handleMessageChange}/>
      <Embedded handleClick={handleClick} value={value} messageValue={messageValue} />
      <Footer txtLink= {`sms:${value}/?&amp;body=${messageValue}`}/>
    </>
  )
}

export default App
