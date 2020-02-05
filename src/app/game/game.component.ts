import {Component, Input} from '@angular/core';
import {DataService} from '../services/data.service';
import {TimerService} from '../services/timer.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})

export class GameComponent {

  constructor( private dataService: DataService, private timerService: TimerService ) {
  }

  // нанять строителя
  buyWorker() {
    if (this.dataService.money >= this.dataService.priceMan) {
      this.dataService.money -= this.dataService.priceMan;
      this.dataService.allMans++;
    }
  }

  // нанять строителя
  buyTruck() {
    if (this.dataService.money >= this.dataService.priceTruck) {
      this.dataService.money -= this.dataService.priceTruck;
      this.dataService.allTrucks++;
    }
  }

  // купить стройматериалы
  buyMaterials() {
    if (this.dataService.money >= this.dataService.priceMaterial) {
      this.dataService.money -= this.dataService.priceMaterial;
      this.dataService.allMaterials += this.dataService.countMaterial;
    }
  }

  log(s) {
    console.log(s);
  }

  getWood() {
    if (this.dataService.allMans > 0) {
      this.dataService.allMans -= 1;
      this.dataService.workMans += 1;
      this.dataService.activeObj
    }
  }
}
