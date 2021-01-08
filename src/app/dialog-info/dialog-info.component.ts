import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-info',
  templateUrl: 'dialog-info.component.html'
})
export class DialogInfoComponent {

  title: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<DialogInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInfoData
  ) {}

}

export interface DialogInfoData {
  title: string;
  text: string;
}
