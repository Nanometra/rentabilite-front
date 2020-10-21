import { Component, Input, OnInit } from '@angular/core';
import { BienService } from '../services/bien.service';
import { Bien } from '../interface/bien';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.scss']
})
export class BienComponent implements OnInit {

  @Input()
  bien: Bien;
  
  @Input()
  index: number;
  
  rentabilite: number;
  loyerAnnuelCalcule: number;
  isRentable: boolean;
  prixAuMetreCarre: number;
  prixNotaire: number;

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
   this.bien = this.bienService.getBienById(this.index);
  }

  


}
