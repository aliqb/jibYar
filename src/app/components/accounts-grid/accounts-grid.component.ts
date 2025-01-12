import { Component, inject, input } from '@angular/core';
import { Account } from '../../types/account.types';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { AccountCardComponent } from '../account-card/account-card.component';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  selector: 'app-accounts-grid',
  imports: [
    MatGridListModule,
    AccountCardComponent,
    AsyncPipe,
    CdkDrag,
    CdkDropList,
  ],
  templateUrl: './accounts-grid.component.html',
  styleUrl: './accounts-grid.component.scss',
})
export class AccountsGridComponent {
  accounts = input.required<Account[]>();
  title = input.required<string>();
  breakpointObserver = inject(BreakpointObserver);
  cols = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.XSmall])
    .pipe(
      map(({ breakpoints }) => {
        if (breakpoints[Breakpoints.XSmall]) {
          return 4;
        } else if (breakpoints[Breakpoints.Large]) {
          return 1;
        }
        return 2;
      })
    );
  drop(event: CdkDragDrop<any[]>) {
    console.log('here');
    moveItemInArray(this.accounts(), event.previousIndex, event.currentIndex);
  }
}
