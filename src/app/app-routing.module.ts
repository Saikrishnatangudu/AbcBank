import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AuthGuardAdmin } from './helperclases/auth.gaurd.Admin';
import { AuthGuard } from './helperclases/auth.guard';
import { HomeComponent } from './home/home.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { ShowselecteduserComponent } from './showselecteduser/showselecteduser.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'newUser', component: CreateUserComponent },
  { path: 'users', component: ViewUserComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: MakeTransactionComponent, canActivate: [AuthGuard] },
  { path: 'listTransactions', component: ShowTransactionComponent, canActivate: [AuthGuard] },
  { path: 'error', component: PageNotFoundComponent },


  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuardAdmin] },
  { path: 'edit', component: EdituserComponent, canActivate: [AuthGuardAdmin] },
  { path: 'view', component: ShowselecteduserComponent, canActivate: [AuthGuardAdmin] },



  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: '' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
