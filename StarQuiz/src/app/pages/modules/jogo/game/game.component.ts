import { Component, OnInit } from '@angular/core';
import { Person } from '../../../../Models/person';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],

})
export class GameComponent implements OnInit {

  public people: Array<Person> = new Array();
  public people2: Array<Person> = new Array();
  // private person = {} as Person;

  private imgList = [{
    id: 1,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png'
  },
  {
    id: 2,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/C-3PO_droid.png/220px-C-3PO_droid.png'
  },
  {
    id: 3,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/39/R2-D2_Droid.png/250px-R2-D2_Droid.png'
  },
  {
    id: 4,
    imgSrc: 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/star-wars-darth-vader-sixth-scale-figure-hot-toys-silo-903140.png'
  },
  {
    id: 5,
    imgSrc: 'https://timedotcom.files.wordpress.com/2014/06/princess-leia.jpg'
  },
  {
    id: 6,
    imgSrc: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png/revision/latest?cb=20171108050140'
  },
  {
    id: 7,
    imgSrc: 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20170713063118'
  },
  {
    id: 8,
    imgSrc: 'https://vignette.wikia.nocookie.net/pt.starwars/images/c/cb/R5-D4_Sideshow.png/revision/latest?cb=20180205160417'
  },
  {
    id: 9,
    imgSrc: 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406'
  },
  {
    id: 10,
    // tslint:disable-next-line:max-line-length
    imgSrc: 'https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest/scale-to-width-down/500?cb=20111115052816'
  }

];
  constructor(private service: PeopleService) { }

  ngOnInit() {
    let count = 1;
    debugger;
    this.service.getPage(1).subscribe(resp => {
      resp.results.forEach(element => {
        while (count <= 5) {
          const imgFilter = this.imgList.filter(img => img.id === count);
          const person = {} as Person;
          person.specie = element.species;
          person.name = element.name;
          person.hair = element.hair;
          person.height = element.height;
          person.planet = element.planet;
          person.imgSrc = imgFilter.length !== 0 ? imgFilter[0].imgSrc : null ;
          this.people.push(person);
          console.log('people: ' + JSON.stringify(this.people));
          count++;
        }

        while (count >= 6 && count <= 10) {
          const imgFilter = this.imgList.filter(img => img.id === count);
          const person = {} as Person;
          person.specie = element.species;
          person.name = element.name;
          person.hair = element.hair;
          person.height = element.height;
          person.planet = element.planet;
          person.imgSrc = imgFilter.length !== 0 ? imgFilter[0].imgSrc : null ;
          this.people2.push(person);
          console.log('people: ' + JSON.stringify(this.people2));
          count++;
        }
      });
      console.log('resp: ' + JSON.stringify(resp.result));
      console.log('people: ' + JSON.stringify(this.people));
    });
  }

}
