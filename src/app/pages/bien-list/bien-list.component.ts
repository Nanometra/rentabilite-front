import { Component, OnInit } from '@angular/core';
import { RentabiliteService } from '../../services/rentabilite.service';
import { Loyer } from '../../interface/loyer'
import { Bien } from '../../interface/bien';

@Component({
  selector: 'app-bien-list',
  templateUrl: './bien-list.component.html',
  styleUrls: ['./bien-list.component.scss']
})
export class BienListComponent implements OnInit {

  loyers: Loyer[] = [];
  biens: Bien[];

  constructor(private rentabiliteService: RentabiliteService) { }

  ngOnInit(): void {
    this.rentabiliteService.getLoyers().subscribe(loyers => {
      this.loyers = loyers;
    });
    this.rentabiliteService.getBiens().subscribe(biens => {
      this.biens = biens;
    });
  }

}
