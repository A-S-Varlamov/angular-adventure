import { Injectable } from '@angular/core';
import {AreaFactory} from './ts/AreaFactory';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public title = 'ООО БолванСтройСервис';
  public money = 3000;
  public allMans = 3;
  public allTrucks = 2;
  public workMans = 0;
  public workTrucks = 0;
  public allMaterials = 100;
  public time = 0;
  public interval;
  public profit = 0;
  public playerLevel = 1;
  // private constructAreas = [];
  public endAreas = 0;
  public factory = new AreaFactory();
  public tenderAreas = this.factory.createAreaArray(5, this.playerLevel);
  public constructAreas = this.factory.createAreaArray(3, this.playerLevel);

}
