import { DataGetterService } from "./src/services/data-getter.service";
import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataget: DataGetterService,
    private storage: Storage
  ) {
    this.initializeApp();
    this.storage.get("auth_token").then((data) => {
      this.dataget.AUTH_TOKEN = data;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.dataget.getApiAthToken();
      this.dataget.getCountryState("India");
    });
  }
}
