import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    TodoCardComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
