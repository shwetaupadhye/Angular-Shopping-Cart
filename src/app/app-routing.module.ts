import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyComponent } from './baby/baby.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogregComponent } from './logreg/logreg.component';
import { MeansComponent } from './means/means.component';
import { ProductComponent } from './product/product.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'head',
    component: HeaderComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'logreg',
    component: LogregComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'baby',
    component: BabyComponent
  },
  {
    path: 'women',
    component: WomensComponent
  },
  {
    path: 'means',
    component: MeansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
