import { PLAYERS } from "./players";

export function resultPackaging(){
    let packagedPlayerArray = PLAYERS
    function mergeById(arrayPlayers: any, arrayResults: any) {
      // array1.map((player:any) => console.log(player))
      // console.log(array2)
      let results = arrayPlayers.map((player: any) => ({
        ...arrayResults.find((result: any) => (result.PlayerId === player.PlayerId) && result),
        ...player
      }));
      return results
    }
  
    function addPositions(array:any){
      array.sort((a:any, b:any) => (a.TotalScore! > b.TotalScore! ? -1 : 1));
      let position = 1
      array.map((player:any) => {
        player.Position = position
        position++
      })
      return array
    }
  
    fetch("https://mocki.io/v1/57c703ab-c5af-4530-b126-d1b784353bea")
    .then(data => data.json())
    .then(data => {
      packagedPlayerArray = mergeById(packagedPlayerArray, data.Results);
      return addPositions(packagedPlayerArray)
    })
    console.log(packagedPlayerArray)
}
