import { AlertDialogService } from './../../services/alert-dialog/alert-dialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const DEFAULT_TITLE = "Message";
const DEFAULT_CLOSE_LABEL = 'Close';
const DEFAULT_TYPE ="default";
const DEFAULT_BUTTON_TYPE = 'primary';
const DEFAULT_CONFIRM_BUTTON_TYPE = 'secondary';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  @ViewChild('alertDialog') alertDialog;

  dialogTitle = DEFAULT_TITLE;
  dialogMessage = '';
  closeLabel = DEFAULT_CLOSE_LABEL;
  type = DEFAULT_TYPE;
  buttonType = DEFAULT_BUTTON_TYPE;
  confirmButtonType = DEFAULT_CONFIRM_BUTTON_TYPE;
  isConfirmDialog = false;
  confirmLabel='Confirm';

  constructor(private modalService: NgbModal,private alertService : AlertDialogService) {
    this.alertService.initComponent(this);
   }

  ngOnInit(): void {
  }

  open(message: string, options: {
    title?: string, 
    closeLabel?: string,
    modalType?: string,
    buttonType?: string,
    confirmDialog?: boolean,
    confirmDialogType?: string
  }) {

    if (!options.title) {
      this.dialogTitle = DEFAULT_TITLE;
    }
    else
    {
      this.dialogTitle = options.title;
    }

    if (!options.closeLabel) {
      this.closeLabel = DEFAULT_CLOSE_LABEL;
    }
    else
    {
      this.closeLabel = options.closeLabel;
    }

    if(!options.modalType){
      this.type = DEFAULT_TYPE;
    }
    else
    {
      this.type = options.modalType;
    }

    if(!options.confirmDialogType){
      this.confirmButtonType = DEFAULT_CONFIRM_BUTTON_TYPE;
    }
    else
    {
      this.confirmButtonType= options.confirmDialogType;
    }

    if(!options.buttonType){
      this.buttonType = DEFAULT_BUTTON_TYPE;
    }
    else
    {
      this.buttonType = options.buttonType;
    }

    this.isConfirmDialog = options.confirmDialog === true;
    


    this.dialogMessage = message;

    return new Promise<string>((resolve) => {
      this.modalService.open(this.alertDialog, { animation: true, keyboard: false, centered: true })
        .result.then((result) => {
            if(result === 'alert.close'){
              resolve('close');
            }

            if(result === 'alert.close.click'){
              resolve('closex');
            }

            if(result === 'alert.confirm'){
              resolve('confirm');
            }

        })
        .catch((err) => {
          resolve(err);
        });
    });

  }
}
