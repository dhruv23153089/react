import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: 'dhruv',
    age: 21
  }
  let favoriteNumbers = [2, 3, 5]

  return (
    <>
     <h1 className='bg-lime-300 bg-opacity-85 text-black p-5 rounded-xl mb-4'>Tailwind Test</h1>
    {/* Card component displays a styled card. Props: none (update if props are added). */}
         <Card userName="Dhruv" btnText="click me" />
         <Card userName="Amit" btnText="visit me"/>
    </>
  )
}

export default App
