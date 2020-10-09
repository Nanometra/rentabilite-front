import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authentificationService: AuthentificationService,
                private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if(this.authentificationService.isAuth) {
                return true;
            } else {
                this.router.navigate(['/authentification'])
            }
        }
}