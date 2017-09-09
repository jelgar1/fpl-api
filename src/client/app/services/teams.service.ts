import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TeamsService {
  team1 = {id: 1, playerIds: [242, 198, 99, 388, 42, 317, 92, 337, 301, 71]};
  loadAll(): Object {
    return this.team1;
  }
}
