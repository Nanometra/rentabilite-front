import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { BienService } from './services/bien.service';
import { BienListComponent } from './bien-list/bien-list.component';
import { AuthentificationComponent } from './authentification/authentification.component';
=======
import { BienListComponent } from './pages/bien-list/bien-list.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
>>>>>>> 6d58581e3cde35d3804f0d59b833b638f50a668a
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
    BienService,
    AuthentificationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
