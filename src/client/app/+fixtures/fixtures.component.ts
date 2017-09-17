import { Component, OnInit } from '@angular/core';
import { TeamsService} from "../services/teams.service";
import {PlayersService} from "../services/players.service";
import {Player} from "../models/player";
import {Team} from "../models/team";

@Component({
  moduleId: module.id,
  selector: 'sd-fixtures',
  templateUrl: 'fixtures.component.html',
  providers: [TeamsService, PlayersService]
})

export class FixturesComponent implements OnInit {
  players: Array<Player> = [];
  currentTeam: Team = new Team;
  teams: Array<Team> = [this.currentTeam];
  constructor(public teamsService: TeamsService, public playersService: PlayersService) {}
  ngOnInit() {
    this.loadPlayer(161);
  }
  loadPlayer(id: number) {
    this.playersService.getIndividual(id)
      .subscribe( (data: any) => {
        console.log(data.history[4].minutes);
      });
  }
}
