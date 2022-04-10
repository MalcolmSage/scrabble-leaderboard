import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/Player';

@Component({
  selector: 'app-leaderboard-player',
  templateUrl: './leaderboard-player.component.html',
  styleUrls: ['./leaderboard-player.component.css']
})
export class LeaderboardPlayerComponent implements OnInit {
  @Input() player!: Player;
  
  constructor() { }

  ngOnInit(): void {
  }

}
