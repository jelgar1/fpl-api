import { Inject, Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Http } from "@angular/http";
import { Gameweek } from '../models/gameweek';

@Injectable()
export class GameweeksService extends ApiService {
  constructor(@Inject(Http) public http: Http) {
    super(http);
  }
  load() {
    return this.get().map((data: any) => data.events.map((raw: any) => Gameweek.fromJSON(raw)));
  }
}
