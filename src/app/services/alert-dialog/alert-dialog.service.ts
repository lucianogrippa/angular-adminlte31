import { Observable } from 'rxjs';
import { AlertDialogComponent } from './../../components/alert-dialog/alert-dialog.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {

  private alertComponent : AlertDialogComponent;

  public static  DIALOG_CLOSE='close';
  public static  DIALOG_CONFIRM='confirm';

  constructor() { }

  initComponent(alertComponent){
    this.alertComponent = alertComponent
  }

  open(message: string, options: {
    title?: string, 
    closeLabel?: string,
    modalType?: string,
    buttonType?: string,
    confirmDialog?: boolean,
    confirmDialogType?: string
  }) {
    return this.alertComponent.open(message,options);
  }
}
