import { NgModule } from '@angular/core';
import { CoinListComponent } from './coin-list.component';
import { CoinDetailComponent } from './coin-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { CoinGuardService } from './coin-guard.service';
import { CoinService } from './coin.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'coins', component: CoinListComponent },
        { path: 'coins/:id',
          canActivate: [ CoinGuardService ],
          component: CoinDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    CoinListComponent,
    CoinDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    CoinService,
    CoinGuardService
  ]
})
export class CoinModule { }
