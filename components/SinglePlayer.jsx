import { useNavigate, useParams } from "react-router-dom";
import { deletePup } from "../api";

export default function SinglePlayer({players}){
  const {playerId} = useParams();
  const selectedPlayer = players.find((player) => {
    return player.id == playerId;
  });

  async function deletePlayer({puppy}){
    try{
      const response = await deletePup(puppy);
      console.log(response);
      nav("/");
    }catch(error){
      console.error(error);
    }
  }

  const nav = useNavigate();

  return(
    <>
      <h1>{selectedPlayer.name}</h1>
      <h3>{selectedPlayer.breed}</h3>
      <h3>{selectedPlayer.status}</h3>
      <img src={selectedPlayer.imageUrl} alt={selectedPlayer.name} />
      <h3>{selectedPlayer.teamId}</h3>
      <button onClick={deletePlayer}>Delete Puppy</button>
    </>
    
  )
}