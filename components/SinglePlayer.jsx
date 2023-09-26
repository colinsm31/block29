import { useNavigate, useParams } from "react-router-dom";

export default function SinglePlayer({players}){
  const {playerId} = useParams();
  const matchedPlayer = players.find((player) => {
    return player.id == playerId;
  });

  const nav = useNavigate();

  return(
    <>
      <h1>{matchedPlayer.name}</h1>
      <h1>{matchedPlayer.breed}</h1>
      <h1>{matchedPlayer.status}</h1>
      <img src={matchedPlayer.imageUrl} alt={matchedPlayer.name} />
      <h1>{matchedPlayer.teamId}</h1>
    </>
    
  )
}