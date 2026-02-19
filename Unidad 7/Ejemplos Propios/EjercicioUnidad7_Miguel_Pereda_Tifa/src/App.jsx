import { useState } from 'react'
import './App.css'
import info from 'info.json'

function App() {

  let Json = JSON.stringify(info);
  let blank = document.getElementById('json');

  blank.textContent = Json;


  return (
    <>
    <p id='json'></p>

    </>
  )
}

export default App
