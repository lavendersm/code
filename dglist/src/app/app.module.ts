import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductListComponent } from './product-list.component';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app.routing';

  @NgModule({
    declarations: [
      AppComponent,
     ProductListComponent
    ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
