import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayersService} from "../services/players.service";


@Component({
  moduleId: module.id,
  selector: 'sd-players',
  templateUrl: 'players.component.html',
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {
  players: Array<Player>
  constructor(public playersService: PlayersService) {}
  ngOnInit() {
    this.updateStats();
  }

  updateStats() {
    this.playersService.load()
      .subscribe((data: any) => {
        console.log('Players:', data);
        this.players = data;
      });
  }
}
