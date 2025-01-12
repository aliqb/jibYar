import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsGridComponent } from './accounts-grid.component';

describe('AccountsGridComponent', () => {
  let component: AccountsGridComponent;
  let fixture: ComponentFixture<AccountsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
