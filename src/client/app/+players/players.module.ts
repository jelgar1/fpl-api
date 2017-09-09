import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayersRoutingModule} from "./players-routing.module";
import {PlayersComponent} from "./players.component";
import {HttpModule} from "@angular/http";
import {ApiService} from "../services/api.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, PlayersRoutingModule, SharedModule],
  declarations: [PlayersComponent],
  exports: [PlayersComponent],
  providers: [HttpModule, ApiService]

})
export class PlayersModule {
}
