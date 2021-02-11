import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegoDetailComponent } from './lego-detail/lego-detail.component';
import { LegoEditComponent } from './lego-edit/lego-edit.component';
import { LegoNewComponent } from './lego-new/lego-new.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'legos/:id/new', component: LegoNewComponent},
    {path: 'legos/:legoId', component: LegoDetailComponent},
    {path: 'legos/:id/edit', component: LegoEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
