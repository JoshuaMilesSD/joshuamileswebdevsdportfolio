import { useState, useEffect, useRef } from 'react'
import './PomodoroClockone.css'

function PomodoroClockone() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [isSession, setIsSession] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    let interval = null
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      if (audioRef.current) {
        audioRef.current.play()
      }
      if (isSession) {
        setTimeLeft(breakLength * 60)
        setIsSession(false)
      } else {
        setTimeLeft(sessionLength * 60)
        setIsSession(true)
      }
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, timeLeft, breakLength, sessionLength, isSession])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleReset = () => {
    setIsActive(false)
    setBreakLength(5)
    setSessionLength(25)
    setTimeLeft(25 * 60)
    setIsSession(true)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const incrementBreak = () => {
    if (!isActive && breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  const decrementBreak = () => {
    if (!isActive && breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  const incrementSession = () => {
    if (!isActive && sessionLength < 60) {
      const newLength = sessionLength + 1
      setSessionLength(newLength)
      if (isSession) {
        setTimeLeft(newLength * 60)
      }
    }
  }

  const decrementSession = () => {
    if (!isActive && sessionLength > 1) {
      const newLength = sessionLength - 1
      setSessionLength(newLength)
      if (isSession) {
        setTimeLeft(newLength * 60)
      }
    }
  }

  return (
    <div className="pomodoro-clock">
      <h1>Pomodoro Clock</h1>
      
      <div className="controls">
        <div className="control-group">
          <h3 id="break-label">Break Length</h3>
          <div className="control-buttons">
            <button id="break-decrement" onClick={decrementBreak}>-</button>
            <span id="break-length">{breakLength}</span>
            <button id="break-increment" onClick={incrementBreak}>+</button>
          </div>
        </div>
        
        <div className="control-group">
          <h3 id="session-label">Session Length</h3>
          <div className="control-buttons">
            <button id="session-decrement" onClick={decrementSession}>-</button>
            <span id="session-length">{sessionLength}</span>
            <button id="session-increment" onClick={incrementSession}>+</button>
          </div>
        </div>
      </div>

      <div className="timer-display">
        <h2 id="timer-label">{isSession ? 'Session' : 'Break'}</h2>
        <div id="time-left" className={timeLeft < 60 ? 'warning' : ''}>
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="timer-controls">
        <button 
          id="start_stop" 
          onClick={() => setIsActive(!isActive)}
          className="control-btn"
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button 
          id="reset" 
          onClick={handleReset}
          className="control-btn"
        >
          Reset
        </button>
      </div>

      <audio 
        id="beep" 
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  )
}

export default PomodoroClockone