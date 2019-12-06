import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';

export interface User {
  name: string;
  no: number;
  team: string;
  count: number;
  email: string;
}

//export interface User {
//   name: string;
//   team: string;
//   level: string;
//   account_number: number;
//   phone_number: string;
//   email: string;
//   //
//   contributions: any;
//   no: number;
//   count: number;
// }


const User_Array: User[] = [
  {no: 1, name: 'John Doe', team: "Cognitive",  count: 1, email: 'name@ecobank.com'},
  {no: 2, name: 'John Doe', team: "Integration",  count: 1, email: 'name@ecobank.com'},
  {no: 3, name: 'John Doe', team: "Cognitive", count: 1, email: 'name@ecobank.com'},
  {no: 4, name: 'John Doe', team: "PLSQL",  count: 1, email: 'name@ecobank.com'},
  {no: 5, name: 'John Doe', team: "Cognitive",  count: 1, email: 'name@ecobank.com'},
  {no: 6, name: 'John Doe', team: "PLSQL", count: 1, email: 'name@ecobank.com'},
  {no: 7, name: 'John Doe', team: "Cognitive", count: 1, email: 'name@ecobank.com'},
  {no: 8, name: 'Doe Mary', team: "PLSQL", count: 1, email: 'name@ecobank.com'},
  {no: 9, name: 'John Doe', team: "Cognitive", count: 1, email: 'name@ecobank.com'},
  {no: 10, name: 'John Doe', team: "Integration", count: 1, email: 'name@ecobank.com'},
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

  displayedColumns: string[] = ['select', 'no', 'name', 'team', 'count', 'email'];
  dataSource = new MatTableDataSource<User>(User_Array);
  selection = new SelectionModel<User>(true, []);


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
    checkboxLabel(row?: User): string {
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
    openAddUserDialog(): void {
      this.dialog.open(AddUserComponent);
    }

}
