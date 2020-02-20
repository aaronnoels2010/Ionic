import { Component } from "@angular/core";

const BEGIN_TEXT: String = "Begin text";
const CLICKED_TEXT: String = "Clicked text";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  text: String = BEGIN_TEXT;

  constructor() {}

  onClick() {
    if (this.text === "Clicked test") {
      this.text = "Begin text";
    } else {
      this.text = "Clicked test";
    }
  }
}
