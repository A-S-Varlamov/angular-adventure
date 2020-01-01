import {Injectable} from '@angular/core';
import {Structure} from '../ts/structure';
import {Area} from '../ts/area';
import {DataService} from './data.service';
import {TimerService} from './timer.service';
import {Man} from '../ts/man';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private dataService: DataService, private timerService: TimerService) {
  }

  createArea(type: string) {
    const names = {castle: 'строительство замка', dom: 'строительство избы', farm: 'строительство фермы'};
    const healthes = {castle: 1000, dom: 300, farm: 100, forest: 100, stone: 300};
    const woods = {castle: 500, farm: 200, dom: 100};
    const stones = {castle: 200, farm: 50, dom: 10};

    const name = names[type];
    const health = healthes[type];
    const wood = woods[type];
    const stone = stones[type];

    const obj = new Area(type, name, 0, health, 'area', 0, wood, 0, stone, 0);
    console.log(obj);

    const x = this.dataService.activeMeter.x;
    const y = this.dataService.activeMeter.y;
    this.dataService.activeMeter.obj = obj;
    this.dataService.arrMapObj[x][y].obj = obj;

  }

  createStructure(type) {

    const names = {castle: 'замок', dom: 'изба', farm: 'ферма', stone: 'камень', forest: 'лес'};
    const resurses = {forest: 'wood', stone: 'stone', castle: false, farm: false, dom: false};
    const counts = {forest: 100, stone: 500};
    const healthes = {castle: 1000, dom: 300, farm: 100, forest: 100, stone: 300};
    const classes = {forest: 'forest' + this.random(3), stone: 'stone', castle: 'castle', farm: 'farm', dom: 'dom'};

    const name = names[type];
    const resurs = resurses[type];
    const count = counts[type];
    const health = healthes[type];
    const clas = classes[type];

    const obj = new Structure(type, name, clas, resurs, count, health, 0);

    const x = this.dataService.activeMeter.x;
    const y = this.dataService.activeMeter.y;
    this.dataService.activeMeter.obj = obj;
    this.dataService.arrMapObj[x][y].obj = obj;
  }

  addWorker() {
    if (this.dataService.activeMeter.obj instanceof Area) {
      if (this.dataService.allMans > 0) {
        this.dataService.allMans--;
        this.dataService.activeMeter.obj.worker++;
      }
    }
  }

  delWorker() {
    if (this.dataService.activeMeter.obj instanceof Area) {
      if (this.dataService.activeMeter.obj.worker > 0) {
        this.dataService.activeMeter.obj.worker--;
        this.dataService.allMans++;
      }
    }
  }

  random(n) {
    return this.timerService.randomInt(1, n);
  }
}
