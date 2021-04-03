import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Component } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "adminlte";

  constructor(private spinner: NgxSpinnerService, private router: Router){}

  ngOnInit() {

    this.router.events
      .subscribe(event => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.spinner.show();
          console.log("show loading");
        }

        if (event instanceof NavigationEnd) {
          this.spinner.hide();
          console.log("hide loading");
        }
    
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
          this.spinner.hide();
          console.log("hide loading");
        }
        if (event instanceof NavigationError) {
          this.spinner.hide();
          console.log("hide loading");
        }
      });
  }
}
