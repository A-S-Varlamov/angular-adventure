import {Injectable} from '@angular/core';
import {Structure} from '../ts/structure';
import {Area} from '../ts/area';
import {DataService} from './data.service';
import {Man} from '../ts/man';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private dataService: DataService) {
  }

  createArea(type: string) {

    const obj = new Area( this.dataService );
    obj.createArea(type);
    const x = this.dataService.activeMeter.x;
    const y = this.dataService.activeMeter.y;
    this.dataService.arrMapObj[x][y].obj = obj;
    return obj;
  }

  createStructure(type, x, y) {

    const names = {castle: 'замок', dom: 'изба', farm: 'ферма', stone: 'камень', forest: 'лес'};
    const resurses = {forest: 'wood', stone: 'stone', castle: false, farm: 'food', dom: false};
    const counts = {forest: 100, stone: 500, farm: 100};
    const healthes = {castle: 1000, dom: 300, farm: 100, forest: 100, stone: 300};
    const classes = {forest: 'forest' + this.randomInt(1, 3), stone: 'stone', castle: 'castle', farm: 'farm', dom: 'dom'};

    const name = names[type];
    const resurs = resurses[type];
    const count = counts[type];
    const health = healthes[type];
    const clas = classes[type];

    const obj = new Structure(type, name, clas, resurs, count, health, health, 0);

    this.dataService.arrMapObj[x][y].obj = obj;
    return obj;
  }

  randomInt(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}
