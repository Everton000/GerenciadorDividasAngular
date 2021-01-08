import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { DialogInfoComponent } from './../dialog-info/dialog-info.component';
import { DividaDialogComponent } from '../divida-dialog/divida-dialog.component';

@Component({
  selector: 'app-divida',
  templateUrl: 'divida.component.html',
  styleUrls: ['divida.component.css']
})
export class DividaComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'select', 'dividaId', 'clienteNome', 'dividaMotivo', 'dividaData', 'dividaValor', 'edit'
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private dividas: PeriodicElement[];

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // filter
  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  // tslint:disable-next-line: typedef
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // tslint:disable-next-line: typedef
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.dividaId + 1}`;
  }

  // tslint:disable-next-line: typedef
  openDialogAdd() {
    const dialogRef = this.dialog.open(DividaDialogComponent, {
      width: '50%',
      data: {
        dialogTitle: 'Nova Dívida'
      }
    });

  }

  // tslint:disable-next-line: typedef
  openDialogEdit(id: number): void {

    // ToDo function para buscar os dados e exibir no form




    this.dialog.open(DividaDialogComponent, {
      width: '50%',
      data: {
        dialogTitle: 'Alterar Dívida',
        clienteId: 'option1',
        motivo: 'teste',
        valor: 123,
        data: Date.now()
      },
    });
  }

  openDialogInfo(): void {
    this.dialog.open(DialogInfoComponent, {
      width: '400px',
      data: {title: 'Atenção', text: 'Selecione uma ou mais dívidas da listagem para continuar.'}
    });
  }

  dividasExcluir(): void {
    // utilize o selection
    this.dividas = this.selection.selected;
    console.log(this.dividas);
  }
}

export interface PeriodicElement {
  clienteNome: string;
  dividaId: number;
  dividaMotivo: number;
  dividaData: string;
  dividaValor: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dividaId: 1, clienteNome: 'Hydrogen', dividaMotivo: 1.0079, dividaData: 'H', dividaValor: 256},
  {dividaId: 2, clienteNome: 'Helium', dividaMotivo: 4.0026, dividaData: 'He', dividaValor: 256},
  {dividaId: 3, clienteNome: 'Lithium', dividaMotivo: 6.941, dividaData: 'Li', dividaValor: 256},
  {dividaId: 4, clienteNome: 'Beryllium', dividaMotivo: 9.0122, dividaData: 'Be', dividaValor: 256},
  {dividaId: 5, clienteNome: 'Boron', dividaMotivo: 10.811, dividaData: 'B', dividaValor: 256},
  {dividaId: 6, clienteNome: 'Carbon', dividaMotivo: 12.0107, dividaData: 'C', dividaValor: 256},
  {dividaId: 7, clienteNome: 'Nitrogen', dividaMotivo: 14.0067, dividaData: 'N', dividaValor: 256},
  {dividaId: 8, clienteNome: 'Oxygen', dividaMotivo: 15.9994, dividaData: 'O', dividaValor: 256},
  {dividaId: 9, clienteNome: 'Fluorine', dividaMotivo: 18.9984, dividaData: 'F', dividaValor: 256},
  {dividaId: 10, clienteNome: 'Neon', dividaMotivo: 20.1797, dividaData: 'Ne', dividaValor: 256},
  {dividaId: 11, clienteNome: 'Sodium', dividaMotivo: 22.9897, dividaData: 'Na', dividaValor: 256},
  {dividaId: 12, clienteNome: 'Magnesium', dividaMotivo: 24.305, dividaData: 'Mg', dividaValor: 256},
  {dividaId: 13, clienteNome: 'Aluminum', dividaMotivo: 26.9815, dividaData: 'Al', dividaValor: 256},
  {dividaId: 14, clienteNome: 'Silicon', dividaMotivo: 28.0855, dividaData: 'Si', dividaValor: 256},
  {dividaId: 15, clienteNome: 'Phosphorus', dividaMotivo: 30.9738, dividaData: 'P', dividaValor: 256},
  {dividaId: 16, clienteNome: 'Sulfur', dividaMotivo: 32.065, dividaData: 'S', dividaValor: 256},
  {dividaId: 17, clienteNome: 'Chlorine', dividaMotivo: 35.453, dividaData: 'Cl', dividaValor: 256},
  {dividaId: 18, clienteNome: 'Argon', dividaMotivo: 39.948, dividaData: 'Ar', dividaValor: 256},
  {dividaId: 19, clienteNome: 'Potassium', dividaMotivo: 39.0983, dividaData: 'K', dividaValor: 256},
  {dividaId: 20, clienteNome: 'Calcium', dividaMotivo: 40.078, dividaData: 'Ca', dividaValor: 256},
];
