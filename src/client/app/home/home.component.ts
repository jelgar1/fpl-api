import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Player } from '../models/player';
import { AllStats } from '../models/all_stats';


@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  players: Array<Player>
  constructor(public apiService: ApiService) {}
  ngOnInit() {
    this.updateStats();
  }

  updateStats() {
    this.apiService.get()
      .subscribe((allStats: AllStats) => {
        this.players = allStats.elements;
        console.log(this.players);
      });
  }
}
