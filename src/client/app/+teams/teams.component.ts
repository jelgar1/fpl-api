import { Component, OnInit } from '@angular/core';
import { TeamsService} from "../services/teams.service";
import {PlayersService} from "../services/players.service";
import {Player} from "../models/player";
import {Team} from "../models/team";

@Component({
  moduleId: module.id,
  selector: 'sd-teams',
  templateUrl: 'teams.component.html',
  providers: [TeamsService, PlayersService]
})

export class TeamsComponent implements OnInit {
  players: Array<Player> = [];
  teams: Array<Team> = [];
  currentTeam: Team = new Team;
  constructor(public teamsService: TeamsService, public playersService: PlayersService) {}
  ngOnInit() {
    this.currentTeam['players'] = [];
    this.loadTeam();
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
  loadTeam() {
    this.playersService.load()
      .subscribe((data: any) => {
        this.players = data;
        let loadedTeam: Team = this.teamsService.loadOne(1);
        loadedTeam['players'] = [];
        let matchedPlayer = undefined;
        loadedTeam.playerIds.map((selectedPlayer: any) => {
          matchedPlayer = this.players.find((player) => player.id === selectedPlayer);
          loadedTeam.players.push(matchedPlayer);
        });
        this.currentTeam = loadedTeam;
      });
  }
}
