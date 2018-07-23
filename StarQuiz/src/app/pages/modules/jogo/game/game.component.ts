import { Person } from './../../../../Models/person';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, PageEvent, MatPaginator } from '@angular/material';
import { PeopleService } from '../services/people.service';
import { ModalRespComponent } from '../modal-resp/modal-resp.component';
import { ModalHelpComponent } from '../modal-help/modal-help.component';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
import { tap } from '../../../../../../node_modules/rxjs/operators';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ticks = 0;

  minutesDisplay: number;
  hoursDisplay: number;
  secondsDisplay: number;

sub: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public people: Array<Person> = new Array();
  public people2: Array<Person> = new Array();
  private res: string;
  pageEvent: PageEvent;
  // private person = {} as Person;

  private imgList = [
    {
      id: 1,
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png'
    },
    {
      id: 2,
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/C-3PO_droid.png/220px-C-3PO_droid.png'
    },
    {
      id: 3,
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/3/39/R2-D2_Droid.png/250px-R2-D2_Droid.png'
    },
    {
      id: 4,
      imgSrc:
        'https://www.sideshowtoy.com/wp-content/uploads/2017/11/star-wars-darth-vader-sixth-scale-figure-hot-toys-silo-903140.png'
    },
    {
      id: 5,
      imgSrc: 'https://timedotcom.files.wordpress.com/2014/06/princess-leia.jpg'
    },
    {
      id: 6,
      imgSrc:
        'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20171108050140'
    },
    {
      id: 7,
      imgSrc:
        'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118'
    },
    {
      id: 8,
      imgSrc:
        'https://vignette.wikia.nocookie.net/pt.starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20180205160417'
    },
    {
      id: 9,
      imgSrc:
        'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406'
    },
    {
      id: 10,
      imgSrc:
        // tslint:disable-next-line:max-line-length
        'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111115052816'
    }
  ];
  constructor(private service: PeopleService, public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    localStorage.setItem('pontuacao', '0');
    localStorage.setItem('help', 'false');

    this.startTimer();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadPage())
        )
        .subscribe();
}

private startTimer() {

  const timer = Observable.timer(1, 1000);
  this.sub = timer.subscribe(
      t => {
          this.ticks = t;

          this.secondsDisplay = this.getSeconds(this.ticks);
          this.minutesDisplay = this.getMinutes(this.ticks);
          if (this.minutesDisplay === 2) {
            this.router.navigate(['./jogo']);
          }
      }
  );
}

private getSeconds(ticks: number) {
  return this.pad(ticks % 60);
}

private getMinutes(ticks: number) {
   return this.pad((Math.floor(ticks / 60)) % 60);
}


private pad(digit: any) {
  return digit <= 9 ? '0' + digit : digit;
}


loadPage() {
  let count = 1;
  this.service.getPage(this.paginator.pageIndex).subscribe(resp => {
    console.log(JSON.stringify(resp));
    for (let i = 0; i < 5; i++) {
      const element = resp.results[i];
      const imgFilter = this.imgList.filter(img => img.id === count);
      const person = {} as Person;
      person.specie = element.species;
      person.name = element.name;
      person.hair = element.hair_color;
      person.height = element.height;
      person.planet = element.planet;
      person.gender = element.gender;
      person.vehicles = element.vehicles;
      person.imgSrc = imgFilter.length !== 0 ? imgFilter[0].imgSrc : null;
      person.success = false;
      this.people.push(person);
      count++;
    }

    for (let i = 5; i <= 11; i++) {
      const element = resp.results[i];
      const imgFilter = this.imgList.filter(img => img.id === count);
      const person = {} as Person;
      person.specie = element.species;
      person.name = element.name;
      person.hair = element.hair_color;
      person.height = element.height;
      person.planet = element.planet;
      person.gender = element.gender;
      person.vehicles = element.vehicles;
      person.imgSrc = imgFilter.length !== 0 ? imgFilter[0].imgSrc : null;
      person.success = false;
      this.people2.push(person);
      count++;
    }
  });
}

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  /**
   *Metodo para chamar o modal escrever e verificar o nome do personagem
   *
   * @param {number} index
   * @memberof GameComponent
   */
  resp(index: number) {
    index < 6
      ? console.log(JSON.stringify(this.people[index]))
      : console.log(JSON.stringify(this.people2[index]));
    const dialogRef = this.dialog.open(ModalRespComponent, {
      width: '250px',
      height: '250px',
      data: {
        data: index < 6 ? this.people[index] : this.people2[index],
        success: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.res = result.success;
      index < 6
        ? (this.people[index].success = Boolean(this.res))
        : (this.people2[index].success = Boolean(this.res));
      // tslint:disable-next-line:triple-equals
      if (this.res == 'true') {
        console.log('entrou');
        index < 6
          ? (this.people[index].success = true)
          : (this.people2[index].success = true);
      }
      console.log(JSON.stringify(this.res));
    });
  }

  /**
   *Metodo para chamar o modal de ajuda
   *
   * @param {number} index
   * @memberof GameComponent
   */
  help(index: any) {
    localStorage.setItem('help', 'true');
    const dialogRef = this.dialog.open(ModalHelpComponent, {
      width: '250px',
      height: '250px',
      data: { data: index < 6 ? this.people[index] : this.people2[index] }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('dialog fechado');
    });
  }
}
