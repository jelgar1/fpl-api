import { Component, OnInit } from '@angular/core';
import { TeamsService} from "../services/teams.service";
import {PlayersService} from "../services/players.service";
import {Player} from "../models/player";
import {Team} from "../models/team";
import {GameweeksService} from '../services/gameweeks.service';

@Component({
  moduleId: module.id,
  selector: 'sd-teams',
  templateUrl: 'teams.component.html',
  providers: [TeamsService, PlayersService, GameweeksService]
})

export class TeamsComponent implements OnInit {
  players: Array<Player> = [];
  currentTeam: Team = new Team;
  teams: Array<Team> = [this.currentTeam];
  constructor(public teamsService: TeamsService,
              public playersService: PlayersService,
              public gameweeksService: GameweeksService) {}
  ngOnInit() {
    this.loadTeams();
  }
  loadTeams() {
    this.playersService.load()
      .subscribe( (data: any) => {
        this.players = data;
        this.teams = this.teamsService.loadAll();
        this.teams.map((team: any) => {
          this.loadTeamPlayers(team);
        });
      });
  }
  loadPlayers() {
    this.playersService.load()
      .subscribe((data: any) => {
        this.players = data;
      });
  }
  loadTeam(teamId: number) {
    this.playersService.load()
      .subscribe((data: any) => {
        this.players = data;
        this.currentTeam = this.loadTeamPlayers(this.teamsService.loadOne(teamId));
        console.log(this.currentTeam);
      });
  }
  loadTeamPlayers(team: any) {
    team['players'] = [];
    let matchedPlayer = undefined;
    team.playerIds.map((selectedPlayer: any) => {
      matchedPlayer = this.players.find((player) => player.id === selectedPlayer);
      team.players.push(matchedPlayer);
    });
    return team;
  }
  loadGameweeks() {
    this.gameweeksService.load()
      .subscribe( (data: any) => {
        console.log('GWs: ', data);
      });
  }
}
