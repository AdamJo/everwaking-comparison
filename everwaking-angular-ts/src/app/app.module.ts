import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentProjectComponent } from './current-project/current-project.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContactComponent,
    CurrentProjectComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
