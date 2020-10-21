import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { BienListComponent } from './pages/bien-list/bien-list.component';
import { DetailBienComponent } from './pages/detail-bien/detail-bien.component';
import { QuatreCentQuatreComponent } from './pages/quatre-cent-quatre/quatre-cent-quatre.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'biens', canActivate: [AuthGuard] , component: BienListComponent },
  { path: 'biens/:id', canActivate: [AuthGuard], component: DetailBienComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: '', component: AuthentificationComponent },
  { path: 'not-found', component: QuatreCentQuatreComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
