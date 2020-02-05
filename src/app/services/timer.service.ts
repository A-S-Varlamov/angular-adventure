import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {BuildService} from './build.service';
import {Meter} from '../ts/meter';
import {Area} from '../ts/area';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

<<<<<<< Updated upstream
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

=======
  constructor( private dataService: DataService ) { }

  // все что происходит за еденицу времени
  tik() {

    // создание тендера с шансом в % за еденицу времени
    const a = this.dataService.factory.randomTimeCreateProduct( this.dataService.chanceTenderCreate,
      this.dataService.playerLevel);
    if (a) {
      this.dataService.tenderAreas.push(a);
    }
    // итерация строительных площадок
    for (const index in this.dataService.constructAreas) {

      // доставка стройматериалов
      if (this.dataService.constructAreas[index].materials < 100 && this.dataService.allMaterials > 0) {
        this.dataService.constructAreas[index].materials +=
          this.dataService.constructAreas[index].trucks / this.dataService.constructAreas[index].level * 2;
        this.dataService.allMaterials -=
          this.dataService.constructAreas[index].trucks / this.dataService.constructAreas[index].level * 2;
        if (this.dataService.constructAreas[index].materials > 100) {
          this.dataService.constructAreas[index].materials = 100;
        }
      }

      // скорость строительства в зависимости от уровня постройки и занятых строителей
      if (this.dataService.constructAreas[index].build < this.dataService.constructAreas[index].materials) {
        this.dataService.constructAreas[index].build +=
          this.dataService.constructAreas[index].mans / this.dataService.constructAreas[index].level;
      }

      // время на строительство вышло
      this.dataService.constructAreas[index].buildTime--;
      if (this.dataService.constructAreas[index].buildTime === 0) {
        // освобождаем строителей
        this.dataService.allMans += this.dataService.constructAreas[index].mans;
        this.dataService.workMans -= this.dataService.constructAreas[index].mans;
        // освобождаем грузовики
        this.dataService.allTrucks += this.dataService.constructAreas[index].trucks;
        this.dataService.workTrucks -= this.dataService.constructAreas[index].trucks;
        this.dataService.constructAreas.splice(Number(index), 1);
      }

      // если здание построено
      if (this.dataService.constructAreas[index].build >= 100) {
        // получаем деньги
        this.dataService.money += this.dataService.constructAreas[index].cost;
        this.dataService.profit += this.dataService.constructAreas[index].cost;
        // освобождаем строителей
        this.dataService.allMans += this.dataService.constructAreas[index].mans;
        this.dataService.workMans -= this.dataService.constructAreas[index].mans;
        // освобождаем грузовики
        this.dataService.allTrucks += this.dataService.constructAreas[index].trucks;
        this.dataService.workTrucks -= this.dataService.constructAreas[index].trucks;
        // переносим здание в массив построеных
        this.dataService.endAreas++;
        this.dataService.constructAreas.splice(Number(index), 1);
      }
    }

    // итерация тендеров
    for (const index in this.dataService.tenderAreas) {
      this.dataService.tenderAreas[index].tenderTime--;
      // если время тендера вышло
      if (this.dataService.tenderAreas[index].tenderTime <= 0) {
        // если мы учавствовали в тендере
        if (this.dataService.tenderAreas[index].rollback > 0) {
          const koof = 7 - this.dataService.tenderAreas[index].rollback / 50;
          const random = this.dataService.factory.randomInt(1, 10);
          if ((random > koof) || koof <= 0) {
            this.dataService.constructAreas =
              this.dataService.constructAreas.concat(this.dataService.tenderAreas.splice(Number(index), 1));
          } else {
            this.dataService.tenderAreas.splice(Number(index), 1);
          }
        } else {
          this.dataService.tenderAreas.splice(Number(index), 1);
        }
      }
    }

    // работающие строители получают зарплату
    this.dataService.money -= this.dataService.workMans / 2;
    // не работающие строители получают минималку
    this.dataService.money -= this.dataService.allMans / 10;
    // работающие грузовики получают зарплату
    this.dataService.money -= this.dataService.workTrucks / 2;
    // не работающие грузовики строители получают минималку
    this.dataService.money -= this.dataService.workTrucks / 10;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
>>>>>>> Stashed changes
}
