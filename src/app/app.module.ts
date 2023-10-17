import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SerchingComponent } from './serching/serching.component';
import { FilterPipePipe } from './serching/filter-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SerchingComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
