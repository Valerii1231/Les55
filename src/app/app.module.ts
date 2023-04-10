import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './service/users.service';
import { GroupService } from './service/group.service';
import { NameService } from './service/name.service'; 
import { StatusService } from './service/status.service'; 
import { PopUpComponent } from './pop-up/pop-up.component'; 
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    UserComponent, 
    HeaderComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [GroupService, UserService, NameService, StatusService, PopUpComponent], 
  bootstrap: [AppComponent], 
  entryComponents: [PopUpComponent]
})
export class AppModule { }

