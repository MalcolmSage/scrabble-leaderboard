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
    this.players[0].TotalScore = 300
    console.log(this.players[0].TotalScore)
    fetch("https://mocki.io/v1/57c703ab-c5af-4530-b126-d1b784353bea")
      .then(data => data.json())
      .then(data => console.log(data))
  }

  displayedColumns = ['PlayerId', "Name"]

  ngOnInit(): void {
  }

}
