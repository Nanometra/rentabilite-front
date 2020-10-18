import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentabiliteService } from '../services/rentabilite.service'

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss']
})
export class DetailBienComponent implements OnInit {

  name: string = "Rentabilité";
  prixBien: number = 100000;

  constructor(private rentabiliteService: RentabiliteService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.rentabiliteService.getRentabiliteById(+id).name;
    this.prixBien = this.rentabiliteService.getRentabiliteById(+id).prixBien;
  }

}
