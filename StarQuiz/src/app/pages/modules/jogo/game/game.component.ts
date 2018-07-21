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
  // private person = {} as Person;

  private imgList = [{
    id: 1,
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Luke_Skywalker.png/220px-Luke_Skywalker.png'
  }];
  constructor(private service: PeopleService) { }

  ngOnInit() {
    let count = 1;
    debugger;
    this.service.getPage(1).subscribe(resp => {
      resp.results.forEach(element => {
        const imgFilter = this.imgList.filter(img => img.id === count);
        const person = {} as Person;
        person.specie = element.species;
        person.name = element.name;
        person.hair = element.hair;
        person.height = element.height;
        person.planet = element.planet;
        person.imgSrc = imgFilter.imgSrc;
        this.people.push(person);
        console.log('people: ' + JSON.stringify(this.people));
        count++;
      });
      console.log('resp: ' + JSON.stringify(resp.result));
      console.log('people: ' + JSON.stringify(this.people));
    });
  }

}
