import { useEffect, useState } from 'react'
import './App.css'

function App() {
  interface IUser {
    id: Number, nome: String, idade: number
  }
  const [users, setUser] = useState<IUser[]>([])

  useEffect(() => {
    fetch('https://backexemple.onrender.com/pessoas')
    .then((response) => response.json() )
    .then((data) => {setUser(data)})
    
  }, [])

  return (
    <>
     <div>
        <p className='text-black'>Bom dia</p>
        {users.map((user, index) => {
          return (
            <h1 key={index}> {user.nome}</h1>
          )
        })}
     </div>
    </>
  )
}

export default App
