import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MenuComponent } from './common/menu/menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductsTableComponent } from './products/products-table/products-table.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductsReorderPageComponent } from './products/products-reorder-page/products-reorder-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomUserPageComponent } from './randomusers/random-user-page/random-user-page.component';
import { ProductPipe } from './products/product.pipe';
import { ThirdComponent } from './common/third/third.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './heroes-form/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MenuComponent,
    FooterComponent,
    ProductsTableComponent,
    ProductsPageComponent,
    ProductsReorderPageComponent,
    RandomUserPageComponent,
    ProductPipe,
    ThirdComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
