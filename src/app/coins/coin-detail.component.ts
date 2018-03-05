import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICoin } from './coin';
import { CoinService } from './coin.service';

@Component({
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  pageTitle: string = 'Coin Details';
  errorMessage: string;
  coin: ICoin;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _coinService: CoinService) {
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCoin(id);
    }
  }

  getCoin(id: number) {
    this._coinService.getCoin(id).subscribe(
      coin => this.coin = coin,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/coins']);
  }

}
