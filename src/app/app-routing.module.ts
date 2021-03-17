import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AnVariableComponent } from './components/an-variable/an-variable.component';
import { AreaComponent } from './components/area/area.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
