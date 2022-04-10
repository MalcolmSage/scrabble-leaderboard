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
  constructor() { }

  displayedColumns = ['PlayerId', "Name"]

  ngOnInit(): void {
  }

}
