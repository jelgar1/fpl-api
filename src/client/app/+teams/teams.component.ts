
import { Component, OnInit } from '@angular/core';
import { TeamsService} from "../services/teams.service";

@Component({
  moduleId: module.id,
  selector: 'sd-teams',
  templateUrl: 'teams.component.html',
  providers: [TeamsService]
})

export class TeamsComponent implements OnInit {
  teamId: Array<Number>;
  constructor(public teamsService: TeamsService) {}
  ngOnInit() {
    this.loadTeams();
  }
  loadTeams() {
    debugger;
    let allTeams:object = this.teamsService.loadAll();
    console.log(allTeams);
  }
}
