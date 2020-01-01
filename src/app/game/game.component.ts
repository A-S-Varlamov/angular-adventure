import {Component, Input} from '@angular/core';
import {DataService} from '../services/data.service';
import {TimerService} from '../services/timer.service';
import {Man} from '../ts/man';
import {BuildService} from '../services/build.service';
import {Area} from '../ts/area';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})

export class GameComponent {

  constructor(
    private dataService: DataService,
    private timerService: TimerService,
    private buildService: BuildService
  ) {
  }

  itIsArea(obj) {
    if (obj instanceof Area) {
      return true;
    } else {
      return false;
    }
  }

  getResurs() {
    if (this.dataService.allMans > 0) {
      this.dataService.allMans -= 1;
      if (!this.dataService.activeMeter.standUp) {
        this.dataService.activeMeter.standUp = new Man('рабочий', 'worker', 1, 'worker');
      } else {
        this.dataService.activeMeter.standUp.count++;
      }
    }
  }

}
