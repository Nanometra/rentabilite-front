import { Component, Input, OnInit } from '@angular/core';
import { RentabiliteService } from '../services/rentabilite.service';
import { Loyer } from '../interface/loyer'

@Component({
  selector: 'app-rentabilite',
  templateUrl: './rentabilite.component.html',
  styleUrls: ['./rentabilite.component.scss']
})
export class RentabiliteComponent implements OnInit {

  @Input() id: number;
  @Input() prixBien: number;
  @Input() loyers: Loyer[] = [];
  @Input() loyerAnnuelCalcule: number;
  @Input() loyerAnnuelIndique: number;
  @Input() rentabilite: number;
  isRentable: boolean;
  @Input() index: number;
  biens: any[];
  @Input() nom: string;

  constructor(private rentabiliteService: RentabiliteService) { }

  ngOnInit(): void {
    this.biens = this.rentabiliteService.biens;
  }



}
