import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app/app.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit() {}
}
