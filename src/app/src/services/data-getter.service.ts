import { async } from "@angular/core/testing";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { promise } from "protractor";
import { Storage } from "@ionic/storage";
import { FieldConfig } from "src/field.interface";

@Injectable({
  providedIn: "root",
})
export class DataGetterService {
  loddata = this.http.get("assets/form.json").toPromise();
  formData: FieldConfig[] = [];
  AUTH_TOKEN: any;
  private BASE_URL = " https://www.universal-tutorial.com/api";

  authToken: "9ga8_UITjrVL5JaGL8R_SAIoKta4fBczVtVGoXRrOVNtqoHNSAH-i9daXJDMWKeCztA";
  constructor(private http: HttpClient, private storage: Storage) {
    this.getForm();
  }
  async getForm() {
    let l;
    await this.loddata.then((data: any) => {
      l = data;
    });
    this.formData = l;
  }
  getHTTPOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtaXRAbGlua3dvay5jb20iLCJhcGlfdG9rZW4iOiI5Z2E4X1VJVGpyVkw1SmFHTDhSX1NBSW9LdGE0ZkJjelZ0VkdvWFJyT1ZOdHFvSE5TQUgtaTlkYVhKRE1XS2VDenRBIn0sImV4cCI6MTU4OTYxMzg3Nn0.g7Fd9_Q7oIvax9TAvcoEzNu_iTWdZCWbgtutsdI03KA",
        Accept: "application/json",
      }),
    };
    return httpOptions;
  }
  getApiAthToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "api-token":
          "9ga8_UITjrVL5JaGL8R_SAIoKta4fBczVtVGoXRrOVNtqoHNSAH-i9daXJDMWKeCztA",
        "user-email": "mit@linkwok.com",
      }),
    };

    this.http
      .get("https://www.universal-tutorial.com/api/getaccesstoken", httpOptions)
      .subscribe((data: any) => {
        this.storage.set("auth_token", data.auth_token);
        console.log(data.auth_token, "-----+++++++");
      });
  }

  getCountryState(satas) {
    return this.http.get(this.BASE_URL + satas, this.getHTTPOptions());
  }
}
