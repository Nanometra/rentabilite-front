import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  authentificationStatus: boolean;

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.authentificationStatus = this.authentificationService.isAuth;
  }

  onSignOut() {
    this.authentificationService.signOut();
    this.authentificationStatus = this.authentificationService.isAuth;
  }

  onSignIn() {
    this.authentificationService.signIn().then(
      () => {
        console.log("Authentification réussie");
        this.authentificationStatus = this.authentificationService.isAuth;
        this.router.navigate(['rentabilite']);
      }
    );

  }

}
