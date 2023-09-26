import { useState, useEffect } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import AllPlayers from '../components/AllPlayers'
import SinglePlayer from '../components/SinglePlayer'
import NewPlayerForm from '../components/NewPlayerForm'
import { fetchPlayers } from '../api'
import { Routes, Route} from 'react-router-dom'
import Searchbar from '../components/Searchbar';

function App() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  async function displayPlayers(){
    const pupArr = await fetchPlayers();
    setPlayers(pupArr);
  }

  useEffect(() => {
    displayPlayers();
  }, [])

  return (
    <>
      <Navbar />
      <div>
        <Searchbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<AllPlayers players={players}/>} />
          <Route path="/players/:playerid" element={<SinglePlayer/>} />
          <Route path="/newplayerform" element={<NewPlayerForm/>} />       
        </Routes>
      </div>
      
    </>
  )
}

export default App
