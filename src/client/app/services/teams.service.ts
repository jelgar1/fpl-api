import { Injectable } from "@angular/core";

@Injectable()
export class TeamsService {
  teams = [{id: 1, playerIds: [242, 198, 99, 388, 42, 317, 92, 337, 301, 71]}];
  loadAll(): Array<object> {
    return this.teams;
  }
}
