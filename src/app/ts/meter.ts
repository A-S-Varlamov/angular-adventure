import {Structure} from './structure';
import {Area} from '../ts/area';
import {Man} from './man';

export class Meter {
  constructor( public x: number, public y: number, public obj?, public standUp?: Man) {
  }
}
