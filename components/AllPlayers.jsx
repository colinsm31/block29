import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({players}){
  const nav = useNavigate();

  return(
    <>
      <h1>AllPlayers Component</h1>
      <div>
        {
          players.map((player) => {
            return(
              <>
                <div key={player.id}>
                  <h3>{player.name}</h3>
                </div>
                <button
                key={player.id}
                onClick={() => nav(`players/${player.id}`)}
                >
                See Details
                </button>
              </>
            )
          })
        }
      </div>
      
    </>
    
  )
}