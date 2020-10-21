import { Component, Input, OnInit } from '@angular/core';
import { BienService } from '../services/bien.service';
import { Bien } from '../interface/bien';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bien-list',
  templateUrl: './bien-list.component.html',
  styleUrls: ['./bien-list.component.scss']
})
export class BienListComponent implements OnInit {

  biens: Bien[];
  bienSuscription: Subscription;

  constructor(private bienService: BienService) { }

  ngOnInit(): void {
    this.bienSuscription = this.bienService.bienSubject.subscribe(
      (biens: Bien[]) => {
        this.biens = biens;
      }
    )
    this.bienService.emitBienSubject();
  }

}
