import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-divida-dialog',
  templateUrl: 'divida-dialog.component.html',
  styleUrls: ['divida-dialog.component.css']
})
export class DividaDialogComponent {
  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data:
    {
      dialogTitle: string,
      clienteId: string,
      motivo: string,
      valor: number,
      data: Date
    }) { }

  salvarDivida(): void {

    // ToDo salvar divida



    // Mensagem de retorno
    this._snackBar.open('Operação realizada com sucesso!', 'Fechar', {
      duration: 2000,
    });
  }
}
