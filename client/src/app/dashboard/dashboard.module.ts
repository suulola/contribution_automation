import { AuthGuard } from './../auth.guard';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
  }
]


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
