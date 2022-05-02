import './css/App.css'
import Button from './components/Button.js'
import Screen from './components/Screen.js'
import ClearButton from './components/ClearButton.js'
import { useState } from 'react'
import { evaluate } from 'mathjs'

export default function App() {

  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val)
  }

  const computeRes = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Please enter some values to perform calculations")
    }
  }

  return (
    <div className='App'>
      <div className='container-calculator'>
        <Screen input={input} />
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={computeRes}>=</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <ClearButton clearHandler={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}