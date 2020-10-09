import { Component, Input, OnInit } from '@angular/core';
import { RentabiliteService } from '../services/rentabilite.service';
import { Loyer } from '../interface/loyer'

@Component({
  selector: 'app-rentabilite-view',
  templateUrl: './rentabilite-view.component.html',
  styleUrls: ['./rentabilite-view.component.scss']
})
export class RentabiliteViewComponent implements OnInit {

  @Input() id: number;
  @Input() index: number;
  @Input() prixBien: number;
  loyers: Loyer[] = [];
  @Input() loyerAnnuelCalcule: number;
  @Input() loyerAnnuelIndique: number;
  @Input() rentabilite: number;
  isRentable: boolean;
  biens: any[];

  constructor(private rentabiliteService: RentabiliteService) { }

  ngOnInit(): void {
    this.loyers = this.rentabiliteService.loyers;
    this.biens = this.rentabiliteService.biens;
  }

}
