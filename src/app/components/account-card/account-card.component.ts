import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CountUpModule } from 'ngx-countup';
import { Currencies } from '../../types/constants';

@Component({
  selector: 'app-account-card',
  imports: [MatCardModule, CountUpModule],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss'
})
export class AccountCardComponent {
  icon = input<string>('images/bank-account-icon.png')
  total = input.required<number>()
  title = input.required<string>()
  currency = input(Currencies.IRT)
  description = input('')
}
