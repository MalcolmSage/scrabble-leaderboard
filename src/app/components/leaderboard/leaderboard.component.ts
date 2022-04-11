import { Component, OnInit } from '@angular/core';
import { PLAYERS } from 'src/app/players';
import { Player } from 'src/app/Player';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Player[] = PLAYERS;
  faTrophy = faTrophy;
  trophy = ['#FFD700', '#c0c0c0', '#cd7f32']

  constructor() {
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
        this.players = mergeById(this.players, data.Results);
        this.players = addPositions(this.players);
      })

    



  }

  displayedColumns = ['PlayerId', "Name", "GamesPlayed", "TotalScore"]

  ngOnInit(): void {
  }

}
