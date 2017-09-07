import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LogServiceService } from './log-service.service';

import { HelloComponent } from './hello/hello.component';
import { MyFirstDirectiveDirective } from './my-first-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MyFirstDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
