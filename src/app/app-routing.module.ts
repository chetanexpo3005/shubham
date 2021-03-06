import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AnArrayComponent } from './components/an-array/an-array.component';
import { AnComponentComponent } from './components/an-component/an-component.component';
import { AnVariableComponent } from './components/an-variable/an-variable.component';
import { AreaComponent } from './components/area/area.component';
import { InlineComponent } from './components/inline/inline.component';
import { LocalStCrudComponent } from './components/local-st-crud/local-st-crud.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'ngif',
    component: NgifComponent
  },
  {
    path: 'ngfor',
    component: NgforComponent
  },
  {
    path: 'ngclass',
    component: NgclassComponent
  },
  {
    path: 'ngstyle',
    component: NgstyleComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'area',
    component: AreaComponent
  }
  ,
  {
    path: 'Vaiables',
    component: AnVariableComponent
  },
  {
    path: 'array',
    component: AnArrayComponent
  },
  {
    path: 'inline',
    component: InlineComponent
  },
  {
    path: 'crud',
    component: LocalStCrudComponent
  },
  {
    path: 'component',
    component: AnComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
