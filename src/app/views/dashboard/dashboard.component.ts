import { AlertDialogService } from './../../services/alert-dialog/alert-dialog.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private alertService: AlertDialogService) {}

  ngOnInit() {}

  onShowAlertExample(nom: string,type: string) {


    this.alertService.open("This is alert example "+nom,{
      buttonType: type,
      modalType:type,
      title: type,
      confirmDialog: false
    })
    .then((res)=>{

      if(res === AlertDialogService.DIALOG_CLOSE){
        alert("closed");
      }
    });
  }

  showMoreInfoOrder() {

    this.alertService.open("This is confirm dialog example, confirm?",{
      buttonType: 'info',
      modalType:'info',
      title: 'Info',
      confirmDialog: true,
      confirmDialogType: 'info'
    })
    .then((res)=>{

      if(res === AlertDialogService.DIALOG_CLOSE){
        alert("closed");
      }
      
      if(res === AlertDialogService.DIALOG_CONFIRM){
        alert('confirm');
      }
    });

  }
}
