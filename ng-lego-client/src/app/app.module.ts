import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LegoItemComponent } from './lego-item/lego-item.component';
import { LegoDetailComponent } from './lego-detail/lego-detail.component';
import { LegoService } from './shared/lego.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { LegoEditComponent } from './lego-edit/lego-edit.component';
import { LegoData } from './shared/lego-data';
import { HttpClientModule } from '@angular/common/http';
import { LegoNewComponent } from './lego-new/lego-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    LegoItemComponent,
    LegoDetailComponent,
    LegoEditComponent,
    LegoNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(LegoData)
  ],
  providers: [LegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
