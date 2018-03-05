import { Component, OnInit } from '@angular/core';

import { ICoin } from './coin';
import { CoinService } from './coin.service';

@Component({
    templateUrl: './coin-list.component.html',
    styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
    pageTitle: string = 'Coin List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCoins = this.listFilter ? this.performFilter(this.listFilter) : this.coins;
    }

    filteredCoins: ICoin[];
    coins: ICoin[] = [];

    constructor(private _coinService: CoinService) {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Coin List: ' + message;
    }

    performFilter(filterBy: string): ICoin[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.coins.filter((coin: ICoin) =>
              coin.coinName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._coinService.getCoins()
                .subscribe(coins => {
                    this.coins = coins;
                    this.filteredCoins = this.coins;
                },
                    error => this.errorMessage = <any>error);
    }
}
