import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTMLFormComponent } from './htmlform/htmlform.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';

const routes: Routes = [

  {
    path: "reactiveform",
    component: ReactiveFormComponentComponent
  },
  {
    path: "htmlform",
    component: HTMLFormComponent
  },
  
  {
    path: "**",
    redirectTo: ""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
