import { useNavigate, useParams } from "react-router-dom";
import { deletePup } from "../api";

export default function SinglePlayer({players}){
  const {playerId} = useParams();
  const matchedPlayer = players.find((player) => {
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
      <h1>{matchedPlayer.name}</h1>
      <h1>{matchedPlayer.breed}</h1>
      <h1>{matchedPlayer.status}</h1>
      <img src={matchedPlayer.imageUrl} alt={matchedPlayer.name} />
      <h1>{matchedPlayer.teamId}</h1>
      <button onClick={deletePlayer}>Delete Puppy</button>
    </>
    
  )
}