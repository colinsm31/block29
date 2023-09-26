import { useState, useEffect } from "react";

export default function AllPlayers({players}){

  return(
    <>
      <h1>AllPlayers Component</h1>
      <div>
        {
          players.map((player) => {
            return(
              <div key={player.id}>
                <h3>{player.name}</h3>
              </div>
            )
          })
        }
      </div>
      
    </>
    
  )
}