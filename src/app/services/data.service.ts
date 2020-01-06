import {Injectable} from '@angular/core';
import {Meter} from '../ts/meter';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public allMans = 5;
  public gold = 1000;
  public wood = 100;
  public stone = 50;
  public food = 500;
  public weapon = 1;

  public time = 0;
  public interval;
  public playerLevel = 1;

  public timerSpeed = 250;  // единица времени в ms

  public arrMapObj: Meter[][] = [];
  public activeMeter: Meter = {x: 0, y: 0};
  public size = 50;
  public height = 10;
  public width = 15;
  public row = '';
  public column = '';

  public level1: number[][] = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
}
