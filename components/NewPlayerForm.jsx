import { useState } from "react";
import { newPup } from "../api";

export default function NewPlayerForm({players, setPlayers}){
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();
    try{
      const result = newPup(name, breed, status, id);
      console.log("Name: ", name, " Breed: ", breed, " Status: ", status, "ID: ", id);

      const newPups = [...players, result.data]
      setPlayers(newPups)

      setName("")
      setBreed("")
      setStatus("");
    }catch(error){
      setError(error.message)
    }
  }

  return(
    <>
      <h2>New Puppy Form!</h2>
      {
        error && <p>{error}</p>
      }
      <form onSubmit={handleSubmit} method="POST">
        <label>
          Name: {" "}
          <input type="text" value={name} onChange={(e) => {
            setName(e.target.value)
          }}/>
        </label>
        <label>
          Breed: {" "}
          <input type="text" value={breed} onChange={(e) => {
            setBreed(e.target.value)
          }}/>
        </label>
        <label>
          Status: {" "}
          <input type="text" value={status} onChange={(e) => {
            setStatus(e.target.value)
          }}/>
        </label>
        <label>
          ID: {" "}
          <input type="text" value={id} onChange={(e) => {
            setId(e.target.value)
          }}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}