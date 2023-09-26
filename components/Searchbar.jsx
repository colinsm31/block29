import { useState, useEffect } from "react";

export default function Searchbar({players}){
  const [searchParams, setSearchParams] = useState("");

  const searchPup = searchParams ? players.filter((player) => {
    player.name.toLowerCase()
  }) : players;
  return(
    <>
      Search: <input type="text" placeholder="search" onChange={searchPup}/>
    </>
  )
}