import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BienService } from '../../services/bien.service'

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {

  nom: string = "Premier Bien";
  prixFAI: number = 100000;

  constructor(private bienService: BienService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // suppression '+' id n'a pas à être un entier, on va pas faire de calcul avec
    // il vaudrait d'ailleur mieux qu'il soit une string du point de vue du front, ça laisse plus de flexibilité
    // pour utiliser des UUID par la suite
    this.bienService.getBienById(id).subscribe(bien => {
      this.nom = bien.nom;
      this.prixFAI = bien.prixFAI;
    });
  }

}
