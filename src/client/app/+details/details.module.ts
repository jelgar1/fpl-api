import {NgModule} from '@angular/core';
import {ApiService} from '../services/api.service';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {DetailsComponent} from './details.component';
import {DetailsRoutingModule} from './details-routing.module';

@NgModule({
  imports: [CommonModule, DetailsRoutingModule, SharedModule],
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  providers: [HttpModule, ApiService]

})
export class DetailsModule {
}
