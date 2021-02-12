import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from 'src/components/details/details.component';
import { DialogComponent } from 'src/components/dialog/dialog.component';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { AuthGuard } from 'src/services/auth.guard';


const routes: Routes = [
  {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'home/details/:id', component:DetailsComponent, canActivate: [AuthGuard]},
  {path: 'contact', component:DetailsComponent, canActivate: [AuthGuard]},
  {path: '**', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
