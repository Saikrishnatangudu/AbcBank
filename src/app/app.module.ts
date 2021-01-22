import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { ShowTransactionComponent } from './show-transaction/show-transaction.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { TransactionsService } from './services/transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { AddAccountComponent } from './add-account/add-account.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ShowselecteduserComponent } from './showselecteduser/showselecteduser.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ViewUserComponent,
    MakeTransactionComponent,
    ShowTransactionComponent,
    HomeComponent,
    AddAccountComponent,
    AdminHomeComponent,
    AdminviewComponent,
    PageNotFoundComponent,
    EdituserComponent,
    ShowselecteduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule
  ],
  providers: [UserService, TransactionsService, AuthenticationService, AdminviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
