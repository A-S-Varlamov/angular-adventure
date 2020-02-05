import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.sass']
})

export class AreaComponent {

  constructor( private sanitizer: DomSanitizer, private dataService: DataService ) {  }

  // отключение защиты от XSS атак для стилей градиента
  getBackgroundArea(obj) {
    return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to top, #dcebf2 ' +
      obj.build + '%, #fff ' + obj.build + '%, #fff 100%)');
  }

  getBackgroundIndicator(obj) {
    return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to right, #FFCC99 ' +
      obj.materials + '%, #fff ' + obj.materials + '%, #fff 100%)');
  }

  // добавление строителя на объект
  addWorker(obj, all?: boolean) {
    if (this.dataService.allMans > 0) {
      if (all) {
        obj.mans += this.dataService.allMans;
        this.dataService.workMans += this.dataService.allMans;
        this.dataService.allMans = 0;
      } else {
        obj.mans++;
        this.dataService.allMans--;
        this.dataService.workMans++;
      }
    }
  }

  // убрать строителя с объекта
  delWorker(obj, all?: boolean) {
    if (obj.mans > 0) {
      if (all) {
        this.dataService.allMans += obj.mans;
        this.dataService.workMans -= obj.mans;
        obj.mans = 0;
      } else {
        obj.mans--;
        this.dataService.allMans++;
        this.dataService.workMans--;
      }
    }
  }

  // добавление грузовика на объект
  addTruck(obj, all?: boolean) {
    if (this.dataService.allTrucks > 0) {
      if (all) {
        obj.trucks += this.dataService.allTrucks;
        this.dataService.workTrucks += this.dataService.allTrucks;
        this.dataService.allTrucks = 0;
      } else {
        obj.trucks++;
        this.dataService.allTrucks--;
        this.dataService.workTrucks++;
      }
    }
  }

  // убрать грузовик с объекта
  delTruck(obj, all?: boolean) {
    if (obj.trucks > 0) {
      if (all) {
        this.dataService.workTrucks -= obj.trucks;
        this.dataService.allTrucks += obj.trucks;
        obj.trucks = 0;
      } else {
        obj.trucks--;
        this.dataService.allTrucks++;
        this.dataService.workTrucks--;
      }
    }
  }
}
