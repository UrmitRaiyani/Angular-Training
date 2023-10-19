import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SerchingComponent } from './serching/serching.component';
import { FilterPipePipe } from './serching/filter-pipe.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { InbuiltDirective } from './inbuilt.directive';
import { ArrayMethodsComponent } from './array-methods/array-methods.component'

@NgModule({
  declarations: [
    AppComponent,
    SerchingComponent,
    FilterPipePipe,
    DirectiveComponent,
    InbuiltDirective,
    ArrayMethodsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
