import { Component, Input, OnInit } from '@angular/core';
import { Bien } from '../../interface/bien';

/**
 * Ce composant est un simple composant graphique en opposition
 * à Smart Component. Il sert simplement à factorisé le template pour la lisibilité
 * il n'a pas besoin de dépendre du service.
 */
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
  
  isRentable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
