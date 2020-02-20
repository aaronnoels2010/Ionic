import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-person-input",
  templateUrl: "./person-input.component.html",
  styleUrls: ["./person-input.component.scss"]
})
export class PersonInputComponent implements OnInit {
  personForm: FormGroup;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.personForm = new FormGroup({
      name: new FormControl("Aaron", [Validators.required])
    });
  }

  ngOnInit() {}

  submitted() {
    console.log(this.personForm.value);
    this.onSubmit.emit(this.personForm.value.name);
  }
}
