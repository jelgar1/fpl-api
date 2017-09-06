import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TeamsComponent } from "./teams.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'teams', component: TeamsComponent}
    ])
  ],
  exports: [RouterModule]
})
export class TeamsRoutingModule {
}
