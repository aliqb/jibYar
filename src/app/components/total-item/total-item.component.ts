import { Component, input } from '@angular/core';
import { Currencies } from '../../types/constants';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-total-item',
  imports: [CountUpModule],
  templateUrl: './total-item.component.html',
  styleUrl: './total-item.component.scss'
})
export class TotalItemComponent {
  total = input.required<number>()
  title = input.required<string>()
  currency = input(Currencies.IRT)
}
