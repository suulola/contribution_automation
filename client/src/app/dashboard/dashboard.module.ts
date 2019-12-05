import { AuthGuard } from './../auth.guard';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import {
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
 } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';


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
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  }
]


@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent,
    AddUserComponent
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
    RouterModule.forChild(dashboardRoutes)
  ],
  entryComponents: [AddUserComponent]
})
export class DashboardModule { }
