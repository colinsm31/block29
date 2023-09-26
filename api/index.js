const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2306-FTB-ET-WEB-PT';

export async function fetchPlayers(){
  const response = await fetch(`${url}/players`);
  const result = await response.json();
  console.log(result);

  return result.data.players;
}

export async function newPup(name, breed){
  try{
    const response = await fetch(`${url}/players`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, breed}),
    });
    const result = await response.json();

    return result;
  } catch(error){
    console.error(error);
  }
}