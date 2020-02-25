import { Component, OnInit, OnDestroy } from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.scss"]
})
export class PersonsComponent implements OnInit, OnDestroy {
  persons: String[];
  personsSubscription: Subscription;

  constructor(private personsService: PersonsService) {
    this.personsService.fetchPersons();
    this.personsSubscription = personsService.personsChanged.subscribe(
      newPersons => (this.persons = newPersons)
    );
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.personsSubscription.unsubscribe();
  }

  deletePerson(person: String) {
    this.personsService.removePerson(person);
  }

  submit(event: string) {
    this.personsService.addPerson(event);
  }
}
