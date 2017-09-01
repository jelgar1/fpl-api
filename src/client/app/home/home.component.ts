import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayersService} from "../services/players.service";


@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [PlayersService]
})
export class HomeComponent implements OnInit {
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
