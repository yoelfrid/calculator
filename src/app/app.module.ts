import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiInputComponent } from './comps/li-input/li-input.component';
import { UlResultComponent } from './comps/ul-result/ul-result.component';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LiInputComponent,
    UlResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
