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
import { AreaComponent } from './components/area/area.component';

import { HttpClientModule} from '@angular/common/http';
import { AnVariableComponent } from './components/an-variable/an-variable.component';
import { AnArrayComponent } from './components/an-array/an-array.component';
import { InlineComponent } from './components/inline/inline.component';
import { LocalStCrudComponent } from './components/local-st-crud/local-st-crud.component';
import { AnComponentComponent } from './components/an-component/an-component.component';
import { CardComponent } from './widgets/card/card.component';
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
    NaPipe,
    AreaComponent,
    AnVariableComponent,
    AnArrayComponent,
    InlineComponent,
    LocalStCrudComponent,
    AnComponentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
