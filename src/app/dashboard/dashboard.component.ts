import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TotalItemComponent } from '../components/total-item/total-item.component';
import { Account } from '../types/account.types';
import { Currencies } from '../types/constants';
import { AccountsGridComponent } from '../components/accounts-grid/accounts-grid.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    TotalItemComponent,
    AccountsGridComponent
  ],
})
export class DashboardComponent {
  accounts: Account[] = [
    {
      id: 1,
      currency: Currencies.IRT,
      description: 'lorem ispum dfsdfsdf sdfsdfsdf sdfsdfsf sdfsdff',
      icon: 'images/bank-account-icon.png',
      title: 'بانک پاسارگاد',
      total: 10000000,
    },
    {
      id: 2,
      currency: Currencies.IRT,
      description: 'Sample description for account 2',
      icon: 'images/bank-account-icon.png',
      title: 'Bank of America',
      total: 5000000,
    },
    {
      id: 3,
      currency: Currencies.IRT,
      description: 'Sample description for account 3',
      icon: 'images/bank-account-icon.png',
      title: 'Deutsche Bank',
      total: 7500000,
    },
    {
      id: 4,
      currency: Currencies.IRT,
      description: 'Sample description for account 4',
      icon: 'images/bank-account-icon.png',
      title: 'HSBC',
      total: 3000000,
    },
  ];



}
