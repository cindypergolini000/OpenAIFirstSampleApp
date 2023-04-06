import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { HTMLFormComponent } from './htmlform/htmlform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponentComponent,
    HTMLFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
