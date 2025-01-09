import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { RandomUserPageComponent } from './randomusers/random-user-page/random-user-page.component';
import { HeroFormComponent } from './heroes-form/hero-form/hero-form.component';
import { ThirdComponent } from './common/third/third.component';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FirstGuard } from './first.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'products', component: ProductsPageComponent, canActivate: [FirstGuard, AuthGuard]},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'random', component: RandomUserPageComponent},
  {path: 'heroform', component: HeroFormComponent},
  {path: 'third', component: ThirdComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
