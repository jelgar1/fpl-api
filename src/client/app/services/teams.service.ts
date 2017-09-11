import { Injectable } from "@angular/core";
import {Team} from "../models/team";

@Injectable()
export class TeamsService {
  teams = [{id: 1, name: 'Jon Goal Boogie', playerIds: [242, 198, 99, 388, 42, 317, 92, 337, 301, 71]}];
  loadAll(): Array<Team> {
    return this.teams.map((raw: any) => Team.fromJSON(raw));
  }

  loadOne(id: Number): Team {
    let selectedTeam: any =  this.teams.find(team => team.id === id)
    return Team.fromJSON(selectedTeam);
  }
}
