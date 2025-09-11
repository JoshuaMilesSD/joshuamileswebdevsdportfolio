import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      
      <div className="calculator-body">
        <div id="display" className="display">
          {display}
        </div>
        
        <div className="button-grid">
          <button id="clear" onClick={clear} className="btn btn-function">
            AC
          </button>
          <button id="divide" onClick={() => performOperation('/')} className="btn btn-operator">
            ÷
          </button>
          <button id="multiply" onClick={() => performOperation('*')} className="btn btn-operator">
            ×
          </button>
          <button id="subtract" onClick={() => performOperation('-')} className="btn btn-operator">
            -
          </button>
          
          <button id="seven" onClick={() => inputNumber(7)} className="btn btn-number">
            7
          </button>
          <button id="eight" onClick={() => inputNumber(8)} className="btn btn-number">
            8
          </button>
          <button id="nine" onClick={() => inputNumber(9)} className="btn btn-number">
            9
          </button>
          <button id="add" onClick={() => performOperation('+')} className="btn btn-operator">
            +
          </button>
          
          <button id="four" onClick={() => inputNumber(4)} className="btn btn-number">
            4
          </button>
          <button id="five" onClick={() => inputNumber(5)} className="btn btn-number">
            5
          </button>
          <button id="six" onClick={() => inputNumber(6)} className="btn btn-number">
            6
          </button>
          <button id="equals" onClick={handleEquals} className="btn btn-equals" style={{gridRow: 'span 2'}}>
            =
          </button>
          
          <button id="one" onClick={() => inputNumber(1)} className="btn btn-number">
            1
          </button>
          <button id="two" onClick={() => inputNumber(2)} className="btn btn-number">
            2
          </button>
          <button id="three" onClick={() => inputNumber(3)} className="btn btn-number">
            3
          </button>
          
          <button id="zero" onClick={() => inputNumber(0)} className="btn btn-number" style={{gridColumn: 'span 2'}}>
            0
          </button>
          <button id="decimal" onClick={inputDecimal} className="btn btn-number">
            .
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator