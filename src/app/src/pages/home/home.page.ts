import { DataGetterService } from "./../../services/data-getter.service";
import { async } from "@angular/core/testing";
import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "src/field.interface";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  regConfig: FieldConfig[] = [];

  constructor(private http: HttpClient, public dataget: DataGetterService) {
    this.dataget.getForm();
    this.regConfig = this.dataget.formData;
  }
  async ngOnInit() {}

  submit($event) {
    alert(JSON.stringify($event));
  }
}
