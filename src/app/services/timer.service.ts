import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {BuildService} from '../services/build.service';
import {Meter} from '../ts/meter';
import {Area} from '../ts/area';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private dataService: DataService, private buildService: BuildService) {
  }

  // все что происходит за еденицу времени
  tik() {
    this.dataService.arrMapObj.forEach(
      (entry) => {
        entry.forEach(
          (meter) => {


            this.workerWork(meter);
            this.buildingEnd(meter);


          });
      });

  }

  // таймер
  startTime() {
    this.dataService.interval = setInterval(() => {
      this.dataService.time++;
      this.tik();
    }, this.dataService.timerSpeed);
  }

  stopTime() {
    clearInterval(this.dataService.interval);
  }

  randomInt(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  buildingEnd(meter) {
    if (meter.obj instanceof Area) {
      if (meter.obj.build >= meter.obj.maxHealth) {
        this.dataService.allMans += meter.obj.worker;
        this.buildService.createStructure(meter.obj.type, meter.x, meter.y);
      }
    }
  }

  workerWork(meter) {
    if (meter.obj) {
      if (meter.obj.worker > 0) {
        if (meter.obj instanceof Area) {
          meter.obj.build += meter.obj.worker;
        }
      }
    }
  }
}
