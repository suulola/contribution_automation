import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';

import { AddContributionComponent } from './add-contribution/add-contribution.component';

export interface Contribution {
  id: any;
  frequency: string;
  description: string;
  contributionDate: Date;
  amount: number;
  users: any;
}

const Contribution_Array: Contribution[] = [
  {id: 1, frequency: "monthly", description: "group monthly contribution towards welfare", contributionDate: new Date(), amount: 50000, users: [{}, {}]},
  {id: 2, frequency: "yearly", description: "yearly contribution", contributionDate: new Date(), amount: 3000, users: [{}, {}, {}, {}, {}]},
]



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['select', 'no', 'description', 'frequency', 'date', 'amount', 'count'];
  dataSource = new MatTableDataSource<Contribution>(Contribution_Array);
  selection = new SelectionModel<Contribution>(true, []);

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
    checkboxLabel(row?: Contribution): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }

    // for the search filtering
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // opens dialog
    openDialog(): void {
      console.log("hi")
      this.dialog.open(AddContributionComponent)
      // dialogRef.afterOpen().subscribe(result => {
      //   console.log("hello there")
      // })

    }

}
