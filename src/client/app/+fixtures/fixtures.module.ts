import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FixturesComponent } from "./fixtures.component";
import {FixturesRoutingModule} from "./fixtures-routing.module";

@NgModule({
  imports: [CommonModule, FixturesRoutingModule],
  declarations: [FixturesComponent],
  exports: [FixturesComponent]
})

export class FixturesModule {
}
