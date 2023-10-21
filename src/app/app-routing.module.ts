import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { SerchingComponent } from './serching/serching.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TempletDrivenFormComponent } from './templet-driven-form/templet-driven-form.component';
import { NestedTempletDrivenFormComponent } from './nested-templet-driven-form/nested-templet-driven-form.component';

const routes: Routes = [
    { path: 'pipes', component: SerchingComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'arrayMethods', component: ArrayMethodsComponent },
    { path: 'form', component: TempletDrivenFormComponent },
    { path: 'nested-templet-driven-form', component: NestedTempletDrivenFormComponent},
];

@NgModule({
imports: [ RouterModule.forRoot(routes)],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
