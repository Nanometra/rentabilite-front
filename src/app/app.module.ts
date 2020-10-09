import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RentabiliteService } from './services/rentabilite.service';
import { RentabiliteViewComponent } from './rentabilite-view/rentabilite-view.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthentificationService } from './services/authentification.service';
import { RouterModule, Routes } from '@angular/router';
import { DetailRentabiliteComponent } from './detail-rentabilite/detail-rentabilite.component'
import { RentabiliteComponent } from './rentabilite/rentabilite.component';
import { QuatreCentQuatreComponent } from './quatre-cent-quatre/quatre-cent-quatre.component';

const appRoutes: Routes = [
  { path: 'rentabilite', component: RentabiliteViewComponent },
  { path: 'rentabilite/:id', component: DetailRentabiliteComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: '', component: RentabiliteViewComponent },
  { path: 'not-found', component: QuatreCentQuatreComponent },
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    RentabiliteComponent,
    RentabiliteViewComponent,
    AuthentificationComponent,
    DetailRentabiliteComponent,
    QuatreCentQuatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RentabiliteService,
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
