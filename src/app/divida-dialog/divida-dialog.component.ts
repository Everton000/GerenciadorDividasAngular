import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-divida-dialog',
  templateUrl: 'divida-dialog.component.html',
  styleUrls: ['divida-dialog.component.css']
})
export class DividaDialogComponent implements OnInit {

  dividaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,

    // values of the dialog
    @Inject(MAT_DIALOG_DATA) public data:
    {
      dialogTitle: string,
      clienteId: string,
      motivo: string,
      valor: number,
      data: Date
    }) { }

    ngOnInit(): void {
      var datePipe = new DatePipe('en-US');

      // init form
      this.dividaForm = this.formBuilder.group({
        clienteId: [this.data?.clienteId, Validators.required],
        motivo: [this.data?.motivo, Validators.required],
        valor: [this.data?.valor, Validators.required],
        data: [datePipe.transform(this.data?.data, 'YYYY-LL-dd'), Validators.required]
      });
  }

  salvarDivida() {
    // ToDo salvar divida
    const clienteId = this.dividaForm.get('clienteId').value;


    // Mensagem de retorno
    this._snackBar.open('Operação realizada com sucesso!', 'Fechar', {
      duration: 2000,
    });

  }
}
