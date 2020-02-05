import {DataService} from '../services/data.service';

export class Area {

  public type: string;
  public name: string;
  public build = 0;
  public maxHealth: number;
  public classImage = 'area';
  public worker = 0;
  public wood: number;
  public woodHere = 0;
  public stone: number;
  public stoneHere = 0;

  constructor(private dataService: DataService) {
  }

  createArea(type: string) {

    const names = {castle: 'строительство замка', dom: 'строительство избы', farm: 'строительство фермы'};
    const maxHealthes = {castle: 1000, dom: 300, farm: 100, forest: 100, stone: 300};
    const woods = {castle: 500, farm: 200, dom: 100};
    const stones = {castle: 200, farm: 50, dom: 10};

    this.type = type;
    this.name = names[type];
    this.maxHealth = maxHealthes[type];
    this.wood = woods[type];
    this.stone = stones[type];
  }

  addWorker() {
    if (this.dataService.activeMeter.obj instanceof Area) {
      if (this.dataService.allMans > 0) {
        this.dataService.allMans--;
        this.worker++;
      }
    }
  }

  delWorker() {
    if (this.dataService.activeMeter.obj instanceof Area) {
      if (this.worker > 0) {
        this.dataService.allMans++;
        this.worker--;
      }
    }

  }
}
