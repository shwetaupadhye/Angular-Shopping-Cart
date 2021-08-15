import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelComponent } from './model/model.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LogregComponent } from './logreg/logreg.component';
import { ContactComponent } from './contact/contact.component';
import { BabyComponent } from './baby/baby.component';
import { MeansComponent } from './means/means.component';
import { WomensComponent } from './womens/womens.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    HomeComponent,
    LogregComponent,
    ContactComponent,
    BabyComponent,
    MeansComponent,
    WomensComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
