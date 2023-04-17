import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <p data-testid="count" className="count">Count: {count}</p>
      <div className="card-actions justify-center">
        <button className="btn" onClick={() => setCount(count + 1)}>Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default App
