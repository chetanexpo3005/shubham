import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { NaPipe } from './pipes/na.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    NgifComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    PipeComponent,
    NaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
