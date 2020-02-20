import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.scss"]
})
export class PersonsComponent implements OnInit {
  persons: string[];

  constructor() {
    this.persons = ["Max", "Mule", "Rider"];
  }

  ngOnInit() {}

  submit(event: string) {
    console.log(`Event with data: ${event}`);
    this.persons.push(event);
  }
}
