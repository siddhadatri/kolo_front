import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { InfoComponent } from './info/info.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RoundComponent } from './round/round.component';
import { DolkaComponent } from './dolka/dolka.component';
import { ForsleepComponent } from './forsleep/forsleep.component';
import { SquareComponent } from './square/square.component';
import { FutonComponent } from './futon/futon.component';
import { BolsterComponent } from './bolster/bolster.component';
import { MatrasComponent } from './matras/matras.component';
import { BagComponent } from './bag/bag.component';
import { SaleComponent } from './sale/sale.component';
import { OrderComponent } from './order/order.component';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ProductsService } from './services/products.service';
import { CartService } from './cart.service';
import { ProductResolver } from './services/resolve.service';
import { ActivatedRouteSnapshot } from '@angular/router';

const appRoutes: Routes=[
  {path: '', component:HomeComponent},
  {
    path: 'products',
    component:ProductsComponent,
    // resolve: { products: ProductResolver }, 
  },
  {path: 'info', component:InfoComponent},
  {
    path: 'cart',
    component: CartComponent,
  },
  {path: 'round', component:RoundComponent},
  {
    path: 'dolka/:id',
    component:DolkaComponent,
    // resolve: { product: ProductResolver },
  },
  {path: 'forsleep', component:ForsleepComponent},
  {path: 'square', component:SquareComponent},
  {path: 'futon', component:FutonComponent},
  {path: 'bolster', component:BolsterComponent},
  {path: 'matras', component:MatrasComponent},
  {path: 'bag', component:BagComponent},
  {path: 'sale', component:SaleComponent},
  {path: 'order', component:OrderComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    InfoComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    RoundComponent,
    DolkaComponent,
    ForsleepComponent,
    SquareComponent,
    FutonComponent,
    BolsterComponent,
    MatrasComponent,
    BagComponent,
    SaleComponent,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService, CartService, ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
