import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RentabiliteComponent } from './rentabilite/rentabilite.component';
import { RentabiliteService } from './services/rentabilite.service';
import { RentabiliteViewComponent } from './rentabilite-view/rentabilite-view.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  { path: 'rentabilite', component: RentabiliteViewComponent},
  { path: 'authentification', component: AuthentificationComponent},
  { path: '', component: RentabiliteViewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RentabiliteComponent,
    RentabiliteViewComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RentabiliteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
