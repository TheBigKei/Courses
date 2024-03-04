import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter.jsx'
import MyComponent from './MyComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyComponent />
    <Counter />
  </React.StrictMode>,
)
