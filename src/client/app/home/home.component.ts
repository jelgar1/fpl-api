import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(public apiService: ApiService) {}
  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.apiService.get()
      .subscribe(
        data => console.log('This is the data:', data)
      );
  }
}
