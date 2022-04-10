import { Component, OnInit } from '@angular/core';
import { PLAYERS } from 'src/app/players';
import { Player } from 'src/app/Player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Player[] = PLAYERS;
  
  constructor() {

    function mergeById(arrayPlayers:any, arrayResults:any){
      // array1.map((player:any) => console.log(player))
      // console.log(array2)
      let results = arrayPlayers.map((player:any) => ({
        ...arrayResults.find((result:any) => (result.PlayerId === player.PlayerId) && result),
        ...player
      }));
      return results
    }

    fetch("https://mocki.io/v1/57c703ab-c5af-4530-b126-d1b784353bea")
      .then(data => data.json())
      .then(data => {
        this.players = mergeById(this.players, data.Results);
        
      })
  }

  displayedColumns = ['PlayerId', "Name"]

  ngOnInit(): void {
  }

}
