import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './app-material';
import { YersComponent } from './components/year2008/year2008.component';
import { YersComponent2009 } from './components/year2009/year2009.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './shared/baseForm/input/input.component';
@NgModule({
  declarations: [
    AppComponent,
    YersComponent,
    InputComponent,
    YersComponent2009,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    Material,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
