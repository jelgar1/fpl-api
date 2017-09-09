import { Component, OnInit } from '@angular/core';
import { TeamsService} from "../services/teams.service";
import {PlayersService} from "../services/players.service";
import {Player} from "../models/player";

@Component({
  moduleId: module.id,
  selector: 'sd-teams',
  templateUrl: 'teams.component.html',
  providers: [TeamsService, PlayersService]
})

export class TeamsComponent implements OnInit {
  players: Array<Player>;
  teams: Array<object>;
  constructor(public teamsService: TeamsService, public playersService: PlayersService) {}
  ngOnInit() {
    this.loadPlayers();
    this.loadTeams();
    this.filterTeams();
  }
  loadTeams() {
    this.teams = this.teamsService.loadAll();
  }
  loadPlayers() {
    this.playersService.load()
      .subscribe((data: any) => {
        this.players = data;
      });
  }
  filterTeams() {
    // map teams and filter only players belonging in teams
  }
}
