import { AuthGuard } from './../auth.guard';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule
 } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddContributionComponent } from './transaction/add-contribution/add-contribution.component';


export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]

//      children: [
//       {
//         path: '',
//         redirectTo: "home",
//         pathMatch:'full'
//     },
//     {
//         path: 'home',
//         component: DashboardComponent,
//     },
//     {
//         path: 'navbar',
//         component: NavbarComponent,
//     }
// ]
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [AuthGuard]
  }
]


@NgModule({
  declarations: [
    DashboardComponent,
    AddUserComponent,
    TransactionComponent,
    AddContributionComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    //
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  entryComponents: [AddUserComponent, AddContributionComponent]
})
export class DashboardModule { }
