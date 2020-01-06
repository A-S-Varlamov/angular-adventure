import {Component, ElementRef, ViewChild, OnInit, Renderer2} from '@angular/core';
import {DataService} from '../services/data.service';
import {BuildService} from '../services/build.service';
import {TimerService} from '../services/timer.service';
import {Meter} from '../ts/meter';
import {Structure} from '../ts/structure';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.sass']
})
export class WorldComponent implements OnInit {

  @ViewChild('world', {static: true}) world: ElementRef;

  private activeMeter: number;
  private lastMeter: number;

  constructor(private dataService: DataService, private buildService: BuildService,
              private timerService: TimerService, private r: Renderer2) {
  }

  // генерация матрицы мира и отрисовка
  generate(size) {
    this.dataService.arrMapObj.length = 0;
    for (let i = 0; i < this.dataService.width; i++) {
      this.dataService.arrMapObj[i] = [];
      for (let j = 0; j < this.dataService.height; j++) {
        this.dataService.arrMapObj[i][j] = new Meter(i, j);

        if (this.dataService.level1[j][i] === 1) {
          this.dataService.arrMapObj[i][j].obj = this.buildService.createStructure('forest', i, j);
        }
        if (this.dataService.level1[j][i] === 2) {
          this.dataService.arrMapObj[i][j].obj = this.buildService.createStructure('stone', i, j);
        }

      }
    }

    // стили для css grid
    for (let i = 0; i < this.dataService.height; i++) {
      this.dataService.row += ' 1fr';
    }

    for (let j = 0; j < this.dataService.width; j++) {
      this.dataService.column += ' 1fr';
    }

    this.r.setStyle(this.world.nativeElement, 'grid-template-rows', this.dataService.row);
    this.r.setStyle(this.world.nativeElement, 'grid-template-columns', this.dataService.column);
    this.r.setStyle(this.world.nativeElement, 'width', this.dataService.width * size + 'px');
    this.r.setStyle(this.world.nativeElement, 'height', this.dataService.height * size + 'px');
  }


  clickMeter(event) {

    const x = event.target.getAttribute('coordx');
    const y = event.target.getAttribute('coordy');

    this.dataService.activeMeter = this.dataService.arrMapObj[x][y];
    console.log(this.dataService.activeMeter);

    this.lastMeter = this.activeMeter;
    this.activeMeter = event.target;

    if (this.lastMeter !== undefined) {
      this.r.removeStyle(this.lastMeter, 'outline');
    }
    this.r.setStyle(event.target, 'outline', '1px solid rgba(255, 50, 50, 0.8)');
  }

  ngOnInit() {
    this.generate(this.dataService.size);
  }

  getClass(x, y) {
    if (this.dataService.arrMapObj[x][y].obj) {
      return this.dataService.arrMapObj[x][y].obj.classImage;
    }
  }
}
