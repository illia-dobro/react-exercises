import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AvatarSelection from './exercises/avatarSelection/AvatarSelection'
import Counter from './exercises/Counter/Counter'
import ControlledCountry from './exercises/controlledCountryPicker/ControlledCountry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ControlledCountry />

    </>
  )
}

export default App
