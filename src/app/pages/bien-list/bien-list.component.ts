import { Component, OnInit } from '@angular/core';
import { BienService } from '../../services/bien.service';
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

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
    this.bienService.getLoyers().subscribe(loyers => {
      this.loyers = loyers;
    });
    this.bienService.getBiens().subscribe(biens => {
      this.biens = biens;
    });
  }

}
