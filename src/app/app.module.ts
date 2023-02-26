import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabySiterServiceService } from './Service/baby-siter-service.service';
import { BabySiterComponent } from './baby-siter/baby-siter.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
    AppComponent,
    BabySiterComponent,
    MenuComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [BabySiterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
