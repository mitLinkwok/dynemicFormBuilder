import { Component, OnInit } from "@angular/core";
import { FieldConfig } from "src/field.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
