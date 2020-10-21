import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RentabiliteService } from './services/rentabilite.service';
import { BienListComponent } from './pages/bien-list/bien-list.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { AuthentificationService } from './services/authentification.service';
import { DetailBienComponent } from './pages/detail-bien/detail-bien.component'
import { BienComponent } from './components/bien/bien.component';
import { QuatreCentQuatreComponent } from './pages/quatre-cent-quatre/quatre-cent-quatre.component';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    BienComponent,
    BienListComponent,
    AuthentificationComponent,
    DetailBienComponent,
    QuatreCentQuatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    RentabiliteService,
    AuthentificationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
