import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { PLAYERS } from 'src/app/players';
import { Player } from 'src/app/Player';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements AfterViewInit {
  players: Player[] = PLAYERS;
  dataSource = new MatTableDataSource(PLAYERS);
  faTrophy = faTrophy;
  trophy = ['#FFD700', '#c0c0c0', '#cd7f32']
  displayedColumns: string[] = ['Position', "Name", "GamesPlayed", "TotalScore"]
  
  constructor(private _liveAnnouncer: LiveAnnouncer) {
    function mergeById(arrayPlayers: any, arrayResults: any) {
      // array1.map((player:any) => console.log(player))
      // console.log(array2)
      let results = arrayPlayers.map((player: any) => ({
        ...arrayResults.find((result: any) => (result.PlayerId === player.PlayerId) && result),
        ...player
      }));
      return results
    }

    function addPositions(array: any) {
      array.sort((a: any, b: any) => (a.TotalScore! > b.TotalScore! ? -1 : 1));
      let position = 1
      array.map((player: any) => {
        player.Position = position
        position++
      })
      return array
    }

    // async function fetchPackaging(): Promise<object> {
    //   return await fetch("https://mocki.io/v1/57c703ab-c5af-4530-b126-d1b784353bea").then(res => res.json())
    //     // .then(res => {
    //     //   return res.json()
    //     // })
    //     // .then(data => {
    //     //       players = mergeById(players, data.Results);
    //     //       players = addPositions(players)
    //     // })      
      
    // }

    fetch("https://mocki.io/v1/57c703ab-c5af-4530-b126-d1b784353bea")
      .then(data => data.json())
      .then(data => {
        this.dataSource.data = mergeById(this.dataSource.data, data.Results);
        this.dataSource.data = addPositions(this.dataSource.data)

      })

  }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
