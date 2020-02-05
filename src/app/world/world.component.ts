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

<<<<<<< Updated upstream
  private activeMeter: number;
  private lastMeter: number;

  constructor(private dataService: DataService, private buildService: BuildService,
              private timerService: TimerService, private r: Renderer2) {
=======
  constructor(private dataService: DataService, private r: Renderer2) {
>>>>>>> Stashed changes
  }

  // генерация матрицы мира и отрисовка
  generate(size) {
<<<<<<< Updated upstream
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

=======
    this.dataService.arrayMapObj.length = 0;
    for (let i = 0; i < this.dataService.width; i++) {
      this.dataService.arrayMapObj[i] = [];
      for (let j = 0; j < this.dataService.height; j++) {
        this.dataService.arrayMapObj[i][j] = new Meter(i, j, {}, {});
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    this.dataService.activeMeter = this.dataService.arrMapObj[x][y];
    console.log(this.dataService.activeMeter);

    this.lastMeter = this.activeMeter;
    this.activeMeter = event.target;

    if (this.lastMeter !== undefined) {
      this.r.removeStyle(this.lastMeter, 'outline');
    }
    this.r.setStyle(event.target, 'outline', '1px solid rgba(255, 50, 50, 0.8)');
=======
    console.log(this.dataService.arrayMapObj[x][y]);
    this.dataService.activeObj = this.dataService.arrayMapObj[x][y];

    this.dataService.lastMeter = this.dataService.activeMeter;
    this.dataService.activeMeter = event.target;

    if (this.dataService.lastMeter !== undefined) {
      this.r.setStyle(this.dataService.lastMeter, 'border', '1px dotted #8ed240');
    }
    this.r.setStyle(event.target, 'border', '1px solid #f88');
>>>>>>> Stashed changes
  }

  ngOnInit() {
    this.generate(this.dataService.size);
<<<<<<< Updated upstream
  }

  getClass(x, y) {
    if (this.dataService.arrMapObj[x][y].obj) {
      return this.dataService.arrMapObj[x][y].obj.classImage;
    }
=======
  }

  createForest() {
    const rand = this.dataService.factory.randomInt(1, 3);
    const obj = new Structure('лес', 'forest' + rand, 100);
    if (this.dataService.activeObj !== undefined) {
      this.dataService.activeObj.obj = obj;
      this.dataService.arrayMapObj[this.dataService.activeObj.x][this.dataService.activeObj.y] = obj;
    }
  }

  getClass( x, y ) {
    return this.dataService.arrayMapObj[x][y].obj.classImage;
>>>>>>> Stashed changes
  }
}
