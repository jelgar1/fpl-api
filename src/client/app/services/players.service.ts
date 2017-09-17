import { Inject, Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Http } from "@angular/http";
import { Player } from "../models/player";

@Injectable()
export class PlayersService extends ApiService {
  constructor(@Inject(Http) public http: Http) {
    super(http);
  }
  load() {
    let loadOne = this.get().map((data: any) => data.elements.map((raw: any) => Player.fromJSON(raw)));
    return loadOne;
  }
  loadPlayer(id: number) {
    return this.getIndividual(id);
  }
}
