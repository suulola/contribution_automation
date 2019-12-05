import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';

export interface PeriodicElement {
  name: string;
  no: number;
  team: string;
  count: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'John Doe', team: "Cognitive",  count: 1},
  {no: 2, name: 'John Doe', team: "Integration",  count: 1},
  {no: 3, name: 'John Doe', team: "Cognitive", count: 1},
  {no: 4, name: 'John Doe', team: "PLSQL",  count: 1},
  {no: 5, name: 'John Doe', team: "Cognitive",  count: 1},
  {no: 6, name: 'John Doe', team: "PLSQL", count: 1},
  {no: 7, name: 'John Doe', team: "Cognitive", count: 1},
  {no: 8, name: 'Doe Mary', team: "PLSQL", count: 1},
  {no: 9, name: 'John Doe', team: "Cognitive", count: 1},
  {no: 10, name: 'John Doe', team: "Integration", count: 1},
];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['select', 'no', 'name', 'team', 'count'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

      /** Selects all rows if they are not all selected; otherwise clear selection. */
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
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.count + 1}`;
    }

    // for the search filtering
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // opens dialog
    openDialog(): void {
      console.log("hi")
      this.dialog.open(AddUserComponent);

      // dialogRef.afterOpen().subscribe(result => {
      //   console.log("hello there")
      // })



      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.animal = result;
      // });
    }

}
