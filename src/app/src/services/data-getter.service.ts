import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataGetterService {
  promise = this.http.get("../../../../assets/form.json").toPromise();
  formData: [];
  constructor(private http: HttpClient) {
    this.getForm();
  }
  getForm() {
    this.promise.then((data: any) => {
      this.formData = data;
    });
  }
}
