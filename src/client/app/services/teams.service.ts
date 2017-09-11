import { Injectable } from "@angular/core";
import {Team} from "../models/team";

@Injectable()
export class TeamsService {
  teams = [{id: 1, playerIds: [242, 198, 99, 388, 42, 317, 92, 337, 301, 71]}];
  loadAll(): Array<Team> {
    return this.teams.map((raw: any) => Team.fromJSON(raw));
  }
}
