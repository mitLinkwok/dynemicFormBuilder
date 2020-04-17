import { DataGetterService } from "./../../services/data-getter.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FieldConfig } from "src/field.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  @Output() selectItem = new EventEmitter();

  constructor(private datagetter: DataGetterService) {
    this.selectItem.emit();
  }

  ngOnInit() {
    console.log("***");
  }
  onSelectChange($event, l) {
    if ($event.target.value[0].name === "UK") {
      for (let i = 0; i < this.datagetter.formData.length; i++) {
        if (this.datagetter.formData[i].id == l) {
          this.datagetter.formData[i].options = [];
          this.datagetter.formData[i].options.push(
            { name: "Liverpool", id: 1 },
            { name: "London", id: 2 },
            { name: "Manchester", id: 3 }
          );
        }
      }
    } else if ($event.target.value[0].name === "India") {
      for (let i = 0; i < this.datagetter.formData.length; i++) {
        if (this.datagetter.formData[i].id == l) {
          this.datagetter.formData[i].options = [];
          this.datagetter.formData[i].options.push(
            { name: "GJ", id: 1 },
            { name: "KA", id: 2 },
            { name: "MH", id: 3 },
            { name: "DH", id: 3 }
          );
        }
      }
    }
  }
}
