import { async } from "@angular/core/testing";
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

  ngAfterViewInit() {}
  async onSelectChange($event, l, url) {
    let o = this.datagetter.formData.findIndex((m) => m.id == l);
    if (this.datagetter.formData.length > 0 && l != undefined) {
      this.datagetter.formData[o].options = [];
      this.datagetter
        .getCountryState(url + $event.target.value.state_name)
        .subscribe((data: any) => {
          if (data.length > 0) {
            if (data[0]["city_name"] != undefined) {
              let u = data.forEach((e) => {
                e["state_name"] = e["city_name"];
                delete e["city_name"];
              });

              this.datagetter.formData[o].options = data;
            } else {
              this.datagetter.formData[o].options = data;
            }
          }
        });
    }

    // if ($event.target.value[0].name === "UK") {
    //   for (let i = 0; i < (await this.datagetter.formData.length); i++) {
    //     this.datagetter.formData[i].options = [];
    //     if (this.datagetter.formData[i].id == l) {
    //       this.datagetter.formData[i].options = [];
    //       this.datagetter.formData[i].options.push(
    //         { name: "Liverpool", id: 1 },
    //         { name: "London", id: 2 },
    //         { name: "Manchester", id: 3 }
    //       );
    //     }
    //   }
    // } else if ($event.target.value[0].name === "India") {
    //   for (let i = 0; i < (await this.datagetter.formData.length); i++) {
    //     if (this.datagetter.formData[i].id == l) {
    //       this.datagetter.formData[i].options = [];
    //       this.datagetter.formData[i].options.push(
    //         { name: "GJ", id: 1 },
    //         { name: "KA", id: 2 },
    //         { name: "MH", id: 3 },
    //         { name: "DH", id: 3 }
    //       );
    //     }
    //   }
    // }
  }
}
