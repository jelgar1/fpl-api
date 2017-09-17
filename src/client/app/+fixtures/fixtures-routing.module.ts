import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FixturesComponent } from "./fixtures.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'fixtures', component: FixturesComponent}
    ])
  ],
  exports: [RouterModule]
})
export class FixturesRoutingModule  {
}
