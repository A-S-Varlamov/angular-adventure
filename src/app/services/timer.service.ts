import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {Meter} from '../ts/meter';
import {Area} from '../ts/area';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private dataService: DataService) {
  }

  // все что происходит за еденицу времени
  tik() {
    this.dataService.arrMapObj.forEach(
      (entry) => {
        entry.forEach(
          (obj) => {


            if (obj.obj) {
              if (obj.obj.worker > 0) {
                if (obj.obj instanceof Area) {
                  obj.obj.build += obj.obj.worker;
                }
              }
            }


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
}
