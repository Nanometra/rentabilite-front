import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BienService } from '../services/bien.service'

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {

  nom: string = "Rentabilité";
  prixFAI: number = 100000;

  constructor(private bienService: BienService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.nom = this.bienService.getBienById(+id).nom;
    this.prixFAI = this.bienService.getBienById(+id).prixFAI;
  }

}
