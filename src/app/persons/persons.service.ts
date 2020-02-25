import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PersonsService {
  personsChanged = new Subject<String[]>();
  persons: String[] = [];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>("https://swapi.co/api/people")
      .pipe(map(rawData => rawData.results.map(actor => actor.name)))
      .subscribe(names => {
        this.personsChanged.next(names);
      });
  }

  addPerson(person: String) {
    this.persons.push(person);
    this.personsChanged.next(this.persons);
  }

  removePerson(personRemove: String) {
    this.persons = this.persons.filter(person => person !== personRemove);
    this.personsChanged.next(this.persons);
  }
}
